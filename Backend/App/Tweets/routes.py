from App.Tweets import bp
from flask_cors import CORS, cross_origin
from flask import make_response, jsonify, request
from Utils import ConnectTwitter
from Utils import MapConnect

@bp.route('/getTweets', methods = ['GET'])
@cross_origin()
def getTweets():
    searchWords = "climate change"
    return make_response(ConnectTwitter.getSearchResult(searchWords), 200)

@bp.route('/getRelatedTweets', methods = ['GET'])
@cross_origin()
def getRelatedTweets():
    place = "delhi, india"
    query = "pollution"
    return make_response(jsonify(ConnectTwitter.getRelatedTweets(place, query)), 200)

@bp.route('/getNearbyPlaces', methods = ['GET'])
@cross_origin()
def getNearbyPlaces():
    place = "chicago"
    searchWords = "environment, nature, tourist"
    return make_response(jsonify(MapConnect.getNearbyPlaces(place, searchWords)), 200)
