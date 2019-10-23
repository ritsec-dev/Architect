from api import db, ma
from sqlalchemy import ForeignKey
from sqlalchemy.orm import relationship
from sqlalchemy.ext.declarative import declarative_base

import uuid

Base = declarative_base()


class Team(db.Model, Base):
    __tablename__ = 'team'
    uuid = db.Column(db.String(36), primary_key=True)
    name = db.Column(db.String(120), unique=True)
    members = relationship("User", back_populates='team')

    def __init__(self, name):
        self.name = name
        self.uuid = str(uuid.uuid4())


class User(db.Model, Base):
    __tablename__ = 'user'
    uuid = db.Column(db.String(36), primary_key=True)
    name = db.Column(db.String(120))
    role = db.Column(db.String(120))
    email = db.Column(db.String(120))
    phone = db.Column(db.String(12))
    team_name = db.Column(db.String(120))

    parent_id = db.Column(db.Integer, ForeignKey("team.uuid"))
    team = relationship("Team", back_populates="members")

    def __init__(self, name, role, email, phone, team_name, team):
        self.name = name
        self.role = role
        self.email = email
        self.phone = phone
        self.parent_id = team.uuid
        self.team = team
        self.team_name = team_name
        self.uuid = str(uuid.uuid4())


class UserSchema(ma.Schema):
    class Meta:
        # Fields to expose
        fields = ('name', 'role', 'email', 'phone', 'team_name', 'uuid')


user_schema = UserSchema()
users_schema = UserSchema(many=True)


db.create_all()
