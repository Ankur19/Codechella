import requests
import json
#auth = tweepy.OAuthHandler("Ab6J3Q7N0Mv4NZVUEP0Ctzd6k", "CzSgIiTtFzNVDyNwQB7DrbXfTopOkMmfRfSm4C55H2bTNRVU8U")
#auth.set_access_token("921346856713535488-XRIcYZtBnisoFZcyNL8N2GT2Hz9Psa6", "Q5vFVt8J4cOedoN5qSHUkSyRcrIkTs4WS4uCiiG2pLAGn")
ConsumerKey = "kZgzEZ2zdgsvMMRiU0GDclKRl"
Bearer="AAAAAAAAAAAAAAAAAAAAAF%2FBJwEAAAAATKApL3J%2BdZfeVKBKJdn1r3fs34o%3DDwfm0t8AM7lsDwdy2gRLvf6EAW63PscLZYU8XURA6tQy0tA5xj"
searchUrl="https://api.twitter.com/1.1/search/tweets.json"


def createHeaders(bearerToken, consumerKey):
    headers = {"Authorization": "Bearer {}".format(bearerToken), "oauth_consumer_key": consumerKey}
    return headers

def createUrl(url, query):
    #query = "from:twitterdev -is:retweet"
    # Tweet fields are adjustable.
    # Options include:
    # attachments, author_id, context_annotations,
    # conversation_id, created_at, entities, geo, id,
    # in_reply_to_user_id, lang, non_public_metrics, organic_metrics,
    # possibly_sensitive, promoted_metrics, public_metrics, referenced_tweets,
    # source, text, and withheld
    #tweet_fields = "tweet.fields=author_id"
    url = "{}?q={}".format(url, query)
    print(url)
    return url

def connectToEndpoint(url, headers):
    response = requests.request("GET", url, headers=headers)
    print(response.status_code)
    if response.status_code != 200:
        raise Exception(response.status_code, response.text)
    return response.json()

def getSearchResult(query):
    url = createUrl(searchUrl, query)
    headers = createHeaders(Bearer, ConsumerKey)
    return connectToEndpoint(url, headers)

