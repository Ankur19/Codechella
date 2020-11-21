import requests
import json

ConsumerKey = "kZgzEZ2zdgsvMMRiU0GDclKRl"
Bearer="AAAAAAAAAAAAAAAAAAAAAF%2FBJwEAAAAATKApL3J%2BdZfeVKBKJdn1r3fs34o%3DDwfm0t8AM7lsDwdy2gRLvf6EAW63PscLZYU8XURA6tQy0tA5xj"


searchUrl="https://api.twitter.com/1.1/search/tweets.json"
geoCodeUrl="https://api.twitter.com/1.1/geo/reverse_geocode.json"
searchAllUrl="https://api.twitter.com/1.1/tweets/search/"

def createHeaders(bearerToken, consumerKey):
    headers = {"Authorization": "Bearer {}".format(bearerToken), "oauth_consumer_key": consumerKey}
    return headers

def createSearchUrl(product, label):
    return "{}{}/{}.json".format(searchAllUrl, product, label)

def getQueryData(data):
    query = {"query":data}
    return str(query)

def createUrl(url, query):
    url = "{}?q={}".format(url, query)
    return url

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

def getAllTweets(query):
    url = createSearchUrl("fullarchive", "Sandbox")
    headers = createHeaders(Bearer, ConsumerKey)
    data = getQueryData(query)
    return connectToEndpoint(url, headers, "POST", data)

