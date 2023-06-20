from .db import db, environment, SCHEMA, add_prefix_for_prod
from datetime import datetime


class CartItem(db.Model):
    __tablename__ = 'cart_items'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('users.id')), nullable=False)
    image_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('images.id')), nullable=False)
    type = db.Column(db.String, nullable=False)

    user = db.relationship('User', back_populates='cart_items')
    image = db.relationship('Image', back_populates='cart_items')

    def to_dict(self):
        return {
            'id': self.id,
            'user_id': self.user_id,
            'image_id': self.image_id,
            'type': self.type,
            'user': self.user.to_dict(),
            'image': self.image.to_dict()
        }
