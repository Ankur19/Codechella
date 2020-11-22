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

@bp.route('/getRelatedTweets/<which>/<place>', methods = ['GET'])
@cross_origin()
def getRelatedTweets(which, place):
    if which=="good":
        query = "(climate action) OR (fight pollution) OR (clean drive) OR (pollution solution)"
    else:
        query = "(litter plastic) OR (garbage dump) OR (plastic pollution) OR pollution OR (climate change)"
    return make_response(jsonify(ConnectTwitter.getRelatedTweets(place, query)), 200)

@bp.route('/getNearbyPlaces/<place>', methods = ['GET'])
@cross_origin()
def getNearbyPlaces(place):
    return make_response(jsonify(str(MapConnect.getNearbyPlaces(place, None))), 200)
