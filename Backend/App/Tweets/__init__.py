from flask import Blueprint

bp = Blueprint('Tweets', __name__)

from App.Tweets import routes