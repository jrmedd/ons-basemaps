import os
from flask import Flask, jsonify, render_template, request
import requests

APP = Flask(__name__)


PLACES_URL = "https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=%s&inputtype=textquery&fields=geometry&locationbias=circle:2000@%s&key=%s"
PLACES_API_KEY = os.environ.get('PLACES_API')

IP_STACK_URL = "http://api.ipstack.com/%s?access_key=%s"
IP_STACK_KEY = os.environ.get('IP_STACK_API')

@APP.route('/')
def index():
    latitude = -2.2434590734806084
    longitude = 53.48076741173544
    ip = request.environ.get('HTTP_X_FORWARDED_FOR', request.remote_addr)
    if ip and ip != "127.0.0.1":
        r = requests.get(IP_STACK_URL % (ip, IP_STACK_KEY))
        if r.status_code == 200:
            data = r.json()
            latitude = data.get('latitude')
            longitude = data.get('longitude')        
    return render_template('index.html', latitude=latitude,longitude=longitude)


@APP.route('/search', methods=["GET"])
def search():
    r = requests.get(PLACES_URL % (request.args.get('query'), request.args.get('locationbias'), PLACES_API_KEY))
    if (r.status_code == 200):
        return jsonify(result=r.json())

if __name__ == '__main__':
    APP.run(debug=True, host="0.0.0.0")
