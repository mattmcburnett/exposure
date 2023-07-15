from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField
from wtforms.validators import DataRequired
from app.models import Comment


class CreateCommentForm(FlaskForm):
    user_id = IntegerField('user id', validators=[DataRequired()])
    image_id = IntegerField('image id', validators=[DataRequired()])
    text = StringField('text', validators=[DataRequired()])
