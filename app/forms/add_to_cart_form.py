from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField
from wtforms.validators import DataRequired
from app.models.cart_item import CartItem

class AddToCartForm(FlaskForm):
    user_id = IntegerField('user_id', validators=[DataRequired()])
    image_id = IntegerField('image_id', validators=[DataRequired()])
    type = StringField('license_type', validators=[DataRequired()])
