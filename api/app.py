from flask import Flask
from flask_restful import Api
from flask_cors import CORS

from rest import hello_world
from rest import members


app = Flask(__name__)
api = Api(app)
api_path = "/api/v1"
cors = CORS(app, resources={r"{}/*".format(api_path): {"origins": "*"}})

api.add_resource(hello_world.HelloWorld, "{}/hello".format(api_path))
api.add_resource(members.Members, "{}/members".format(api_path))


if __name__ == "__main__":
    app.run(debug=True)
