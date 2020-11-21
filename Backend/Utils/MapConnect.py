from googleplaces import GooglePlaces, types, lang
import requests
import json

ApiKey="AIzaSyDyezIRwIeR6FYdDdF7kn5EEG1dL3u56FQ"

gp = GooglePlaces(ApiKey)

def getQueryResult(location, keyword):
    return gp.text_search(location=location, query=keyword, radius=20000)

def getNearbyNext(location, keyword, nextPageToken):
    return gp.text_search(location=location, query=keyword, radius=20000, pagetoken=nextPageToken)

def getNearbyPlaces(location, keyword):

    results = []

    data = getQueryResult(location, keyword)

    for place in data.places:
        results.append({"name":place.name, "geocode": place.geo_location, "id": place.place_id})
    
    '''while data.has_next_page_token:
        data = getNearbyNext(location, keyword, data.next_page_token)
        for place in data.places:
            results.append({"name":place.name, "geocode": place.geo_location, "id": place.place_id})'''

    return results