from .db import db, environment, SCHEMA, add_prefix_for_prod
from datetime import date


class Image(db.Model):
    __tablename__ = 'images'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    image = db.Column(db.String(300), nulllable=False)
    title = db.Column(db.String(255), nullable=False)
    caption = db.Column(db.String(400))
    owner_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('users.id')), nullable=False)
    artist_first_name = db.Column(db.String(40), nullable=False)
    artist_last_name = db.Column(db.String(40), nullable=False)
    basic_price = db.Column(db.Integer)
    exclusive_price = db.Column(db.Integer)
    royalty_rate = db.Column(db.Integer)

    user = db.relationship('User', back_populates='images')
    licenses = db.relationship('License', back_populates='image')
