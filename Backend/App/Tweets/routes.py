from App.Tweets import bp
from flask_cors import CORS, cross_origin
from flask import jsonify, make_response, abort,request
from Utils import ConnectTwitter

@bp.route('/getTweets', methods = ['GET'])
@cross_origin()
def getTweets():
    searchWords = "visit"
    return make_response(ConnectTwitter.getAllTweets(searchWords), 200) #ConnectTwitter.getSearchResult(searchWords), 200)