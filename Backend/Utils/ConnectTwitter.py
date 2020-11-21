import requests
import json
from Utils import MapConnect

ConsumerKey = "kZgzEZ2zdgsvMMRiU0GDclKRl"
Bearer="AAAAAAAAAAAAAAAAAAAAAF%2FBJwEAAAAA0FPbx0SwVhp1HRXW43vFvzYWWJ8%3Ddd22xWLQwcD2pr2bpJfaoYTJpSemLODiaEMGXtLzxx4wpeGRE8"


searchUrl="https://api.twitter.com/1.1/search/tweets.json"
geoCodeUrl="https://api.twitter.com/1.1/geo/reverse_geocode.json"
searchAllUrl="https://api.twitter.com/1.1/tweets/search/"

def createHeaders(bearerToken, consumerKey):
    headers = {"Authorization": "Bearer {}".format(bearerToken), "oauth_consumer_key": consumerKey}
    return headers

def createUrl(url, query):
    url = "{}?q={}".format(url, query)
    return url

def addQuery(url, key, value):
    return "{}&{}={}".format(url, key, value)

def connectToEndpoint(url, headers, requestType, data):
    if data is None:
        response = requests.request(requestType, url, headers=headers)
    else:
        response = requests.request(requestType, url, headers=headers, data = data)
    print(response.status_code)
    if response.status_code != 200:
        raise Exception(response.status_code, response.text)
    
    return response.json()

def getSearchResult(query):
    url = createUrl(searchUrl, query)
    headers = createHeaders(Bearer, ConsumerKey)
    return connectToEndpoint(url, headers, "GET", None)

def createLatLongVal(lat, lng, dist):
    return ",".join([str(lat), str(lng), str(dist)])

def getRelatedTweets(place, query):
    tempData = []
    searchWords = "nature tourist site"

    data = MapConnect.getNearbyPlaces(place, searchWords)
    print(place)
    print(searchWords)
    url = createUrl(searchUrl, query)
    headers = createHeaders(Bearer, ConsumerKey)

    for place in data:
        tempData.append([str(place['geocode']['lat']), str(place['geocode']['lng'])])
    
    tempData = [createLatLongVal(i[0], i[1], "1mi") for i in tempData]

    tempData = [addQuery(url, "geocode", i) for i in tempData]

    tempData = [addQuery(i, "count", "100") for i in tempData]

    tempData = [connectToEndpoint(i, headers, "GET", None) for i in tempData]

    return tempData
