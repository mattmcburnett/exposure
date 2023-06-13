from .db import db, environment, SCHEMA, add_prefix_for_prod
from datetime import datetime


class License(db.Model):
    __tablename__ = 'licenses'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('users.id')), nullable=False)
    image_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('images.id')))
    image_owner_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('users.id')))
    artist_first_name = db.Column(db.String(40), nullable=False)
    artist_last_name = db.Column(db.String(40), nullable=False)
    image = image = db.Column(db.String(300), nulllable=False)
    title = db.Column(db.String(255), nullable=False)
    caption = db.Column(db.String(400))
    type = db.Column(db.String(25), nullable=False)
    price = db.Column(db.Integer, nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.now())

    user = db.relationship('User', back_populates='licenses')
