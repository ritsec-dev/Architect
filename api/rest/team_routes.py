from flask import request, jsonify, Blueprint, Response
from api import db
from rest.models import Team
from rest.models import users_schema
from flask_cors import cross_origin

team = Blueprint('team', __name__)


@team.route('/team/add', methods=['POST'])
@cross_origin()
def add_team():
    name = request.json.get('name', '')
    if name:
        team = Team(name)
        db.session.add(team)
        db.session.commit()
        return Response("Team Added", 200)
    return Response("Invalid JSON", 500)


@team.route('/team/members', methods=['GET'])
@cross_origin()
def get_members():
    name = request.json.get('name', '')
    if name:
        team = Team.query.filter_by(name=name).first()
        if team:
            members = team.members
            return jsonify(users_schema.dump(members))

        return Response("Team does not exist", 500)

    return Response("Invalid JSON", 500)
