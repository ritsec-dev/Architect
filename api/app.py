from flask import Flask
from flask_restful import Api

from rest import hello_world


app = Flask(__name__)
api = Api(app)
api_path = "/api/v1"

api.add_resource(hello_world.HelloWorld, "{}/hello".format(api_path))


if __name__ == "__main__":
    app.run(debug=True)
