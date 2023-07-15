from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField
from wtforms.validators import DataRequired
from app.models import Comment

class UpdateCommentForm(FlaskForm):
    text = StringField('text', validators=[DataRequired()])
