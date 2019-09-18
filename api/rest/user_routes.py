from flask import request, jsonify, Blueprint
from rest.models import User, user_schema, users_schema, db

user = Blueprint('user', __name__)


@user.route("/user_add", methods=["POST"])
def add_user():
    name = request.json['name']
    role = request.json['role']
    email = request.json['email']
    phone = request.json['phone']
    team = request.json['team']

    new_user = User(name, role, email, phone, team)

    db.session.add(new_user)
    db.session.commit()

    return jsonify(new_user)


@user.route('/all_users', methods=['GET'])
def get_users():
    all_users = User.query.all()
    all_users.append(0)
    result = users_schema.dump(all_users)
    return jsonify(result.data)

