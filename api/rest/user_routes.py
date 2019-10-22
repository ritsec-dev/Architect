from flask import request, jsonify, Blueprint, Response
from api.rest.models import User, user_schema, users_schema, db, Team
from flask_cors import cross_origin

user = Blueprint('user', __name__)


@user.route("/user/add", methods=["POST"])
@cross_origin()
def add_user():
    name = request.json.get('name', '')
    role = request.json.get('role', '')
    email = request.json.get('email', '')
    phone = request.json.get('phone', '')
    team_name = request.json.get('team', '')
    team = Team.query.filter_by(name=team_name).first()
    if name and role and email and phone and team_name:
        if team:

            new_user = User(name, role, email, phone, team)

            db.session.add(new_user)
            db.session.commit()

            return jsonify(user_schema.dump(new_user))

        return Response("Team does not exist", 500)

    return Response("Invalid JSON", 500)


@user.route('/user/all', methods=['GET'])
@cross_origin()
def get_users():
    all_users = User.query.all()
    result = users_schema.dump(all_users)
    return jsonify(result)


@user.route('/user/delete', methods=['DELETE'])
@cross_origin()
def delete_user():
    uuid = request.json.get('uuid', '')
    if uuid:
        user = User.query.filter_by(uuid=uuid).first()
        if user:
            db.session.delete(user)
            db.session.commit()
            return Response("Deleted user {}".format(uuid))
        return Response("User does not exist", 500)
    return Response("Invalid JSON", 500)


@user.route('/user/modify', methods=['UPDATE'])
@cross_origin()
def modify_user():
    email = request.json.get('email', '')
    name = request.json.get('name', '')
    phone = request.json.get('phone', '')
    role = request.json.get('role', '')
    uuid = request.json.get('uuid', '')
    if uuid:
        user = User.query.filter_by(uuid=uuid).first()
        if user:
            user.email = email if email else user.email
            user.name = name if name else user.name
            user.phone = phone if phone else user.phone
            user.role = role if role else user.role
            return Response("User updated", 200)

        return Response("User does not exist", 500)

    return Response("UUID required", 500)
