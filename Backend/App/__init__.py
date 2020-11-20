from flask import Flask,request, jsonify, make_response
from flask_cors import CORS, cross_origin
from App.Tweets import bp as tweetBp

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

app.register_blueprint(tweetBp, url_prefix="/")

@app.errorhandler(404)
@cross_origin()
def not_found(error):
    return make_response(jsonify({'error': 'Not found'}), 404)

if __name__ == "__main__":
    app.run(debug=True)