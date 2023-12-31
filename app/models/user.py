from .db import db, environment, SCHEMA, add_prefix_for_prod
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin
from datetime import datetime


class User(db.Model, UserMixin):
    __tablename__ = 'users'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(40), nullable=False, unique=True)
    email = db.Column(db.String(255), nullable=False, unique=True)
    hashed_password = db.Column(db.String(255), nullable=False)
    first_name = db.Column(db.String(40), nullable=False)
    last_name = db.Column(db.String(40), nullable=False)
    age = db.Column(db.Integer, nullable= False)
    about = db.Column(db.String(400))
    profile_pic = db.Column(db.String(300))
    created_at = db.Column(db.DateTime, default=datetime.now())

    images = db.relationship('Image', back_populates='user', cascade="all, delete-orphan")
    licenses = db.relationship('License', back_populates='user', cascade="all, delete-orphan")
    cart_items = db.relationship('CartItem', back_populates = 'user', cascade="all, delete-orphan")
    comments = db.relationship('Comment', back_populates = 'user', cascade="all, delete-orphan")

    @property
    def password(self):
        return self.hashed_password

    @password.setter
    def password(self, password):
        self.hashed_password = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password, password)

    def to_dict(self):
        return {
            'id': self.id,
            'username': self.username,
            'email': self.email,
            'hashed_password': self.hashed_password,
            'first_name': self.first_name,
            'last_name': self.last_name,
            'age': self.age,
            'about': self.about,
            'profile_pic': self.profile_pic,
            'created_at': self.created_at
        }
