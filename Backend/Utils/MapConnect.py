from googleplaces import GooglePlaces, types, lang
import requests
import json

ApiKey="AIzaSyDyezIRwIeR6FYdDdF7kn5EEG1dL3u56FQ"
placeSearch="https://maps.googleapis.com/maps/api/place/findplacefromtext/json?"
nearbySearch="https://maps.googleapis.com/maps/api/place/nearbysearch/json?"

gp = GooglePlaces(ApiKey)

def addKeyVal(url, key, val, first):
    if first:
        data = url + str(key)+"="+ "%20".join(val.split(" "))
    else:
        data = url + "&" + str(key) + "="+ "%20".join(val.split(" "))
    return data

def connectToEndpoint(url, headers, requestType, data):
    if data is None:
        response = requests.request(requestType, url, headers=headers)
    else:
        response = requests.request(requestType, url, headers=headers, data = data)
    print(response.status_code)
    if response.status_code != 200:
        raise Exception(response.status_code, response.text)
    
    return response.json()

def getQueryResult(location, keyword):
    return gp.nearby_search(location=location, keyword=keyword, radius=50000)

def getNearbyNext(location, keyword, nextPageToken):
    return gp.nearby_search(location=location, keyword=keyword, radius=50000, pagetoken=nextPageToken)

def getNearbyPlaces(location, keyword):

    results = []

    '''data = getQueryResult(location, keyword)
    print(data)
    for place in data.places:
        results.append({"name":place.name, "geocode": place.geo_location, "id": place.place_id})
    
    while data.has_next_page_token:
        data = getNearbyNext(location, keyword, data.next_page_token)
        for place in data.places:
            results.append({"name":place.name, "geocode": place.geo_location, "id": place.place_id})'''
    url = placeSearch
    url = addKeyVal(url, "input", location, True)
    url = addKeyVal(url, "fields", "geometry", False)
    url = addKeyVal(url, "key", ApiKey, False)
    url = addKeyVal(url, "inputtype", "textquery", False)

    results = connectToEndpoint(url, None, 'GET', None)
    if(len(results["candidates"])==0):
        return {}
    
    location = results["candidates"][0]["geometry"]["location"]
    
    url = addKeyVal(nearbySearch, "location", ",".join([str(location["lat"]), str(location["lng"])]), True)
    url = addKeyVal(url, "key", ApiKey, False)
    url = addKeyVal(url, "radius", "50000", False)
    if keyword is not None:
        url = addKeyVal(url, "keyword", keyword, False)
    url = addKeyVal(url, "rankby", "prominence", False)
    url = addKeyVal(url, "type", "tourist_attraction", False)

    results = connectToEndpoint(url, None, 'GET', None)

    if "next_page_token" in results:
        url = addKeyVal(nearbySearch, "pagetoken", results["next_page_token"], True)
        nResults = connectToEndpoint(url, None, 'GET', None)["results"]
        results = results["results"] + nResults

    return results