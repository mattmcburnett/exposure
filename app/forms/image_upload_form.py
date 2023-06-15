from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField
from flask_wtf.file import FileField, FileAllowed, FileRequired
from wtforms.validators import DataRequired, Email, ValidationError
from app.models import Image
from ..api.AWS_helpers import ALLOWED_EXTENSIONS


class ImageUploadForm(FlaskForm):
    image = FileField('image file', validators=[FileRequired(), FileAllowed(list(ALLOWED_EXTENSIONS))])
    title = StringField('image title', validators=[DataRequired()])
    caption = StringField('image caption')
    owner_id = IntegerField('owner id')
    artist_first_name = StringField('artist first name')
    artist_last_name = StringField('artist last name')
    basic_price = IntegerField('basic price')
    exclusive_price = IntegerField('exclusive price')
    royalty_rate = IntegerField('royalty rate')
