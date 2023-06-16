from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField
from wtforms.validators import DataRequired
from app.models import Image


class ImageUpdateForm(FlaskForm):
    title = StringField('image title', validators=[DataRequired()])
    caption = StringField('image caption')
    basic_price = IntegerField('basic price')
    exclusive_price = IntegerField('exclusive price')
    royalty_rate = IntegerField('royalty rate')
