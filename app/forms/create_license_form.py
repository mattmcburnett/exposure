from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField
from wtforms.validators import DataRequired
from app.models import License


class CreateLicenseForm(FlaskForm):
    user_id = IntegerField('user_id', validators=[DataRequired()])
    image_id = IntegerField('image_id', validators=[DataRequired()])
    artist_first_name = StringField('artist_first_name', validators=[DataRequired()])
    artist_last_name = StringField('artist_last_name', validators=[DataRequired()])
    image_url = StringField('image_url', validators=[DataRequired()])
    title = StringField('image title', validators=[DataRequired()])
    caption = StringField('caption', validators=[DataRequired()])
    type = StringField('license type', validators=[DataRequired()])
    price = IntegerField('price', validators=[DataRequired()])
