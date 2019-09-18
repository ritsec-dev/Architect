from api import db, ma
from sqlalchemy import ForeignKey
from sqlalchemy.orm import relationship
from sqlalchemy.ext.declarative import declarative_base

Base = declarative_base()


class Team(db.Model, Base):
    __tablename__ = 'team'
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    name = db.Column(db.String(120))
    members = relationship("User", back_populates='team')

    def __init__(self, name):
        self.name = name


class User(db.Model, Base):
    __tablename__ = 'user'
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    name = db.Column(db.String(120))
    role = db.Column(db.String(120))
    email = db.Column(db.String(120))
    phone = db.Column(db.String(12))

    parent_id = db.Column(db.Integer, ForeignKey("team.id"))
    team = relationship("Team", back_populates="members")

    def __init__(self, name, role, email, phone, team):
        self.name = name
        self.role = role
        self.email = email
        self.phone = phone
        self.parent_id = team.id
        self.team = team


class UserSchema(ma.Schema):
    class Meta:
        # Fields to expose
        fields = ('name', 'role', 'email', 'phone')


user_schema = UserSchema()
users_schema = UserSchema(many=True)


db.create_all()
