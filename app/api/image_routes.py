from flask import Blueprint, jsonify, session, request
from flask_login import login_required
from app.models import db, User, Image
from .AWS_helpers import get_unique_filename, upload_file_to_s3
from ..forms.image_upload_form import ImageUploadForm

image_routes = Blueprint('images', __name__)


@image_routes.route('/', methods=['POST'])
@login_required
def upload_image():
    """Current user uploads an image"""
    form = ImageUploadForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        print('form data =======', form.data)
        image = form.data["image"]
        image.filename = get_unique_filename(image.filename)
        upload = upload_file_to_s3(image)

        if "url" not in upload:
        # if the dictionary doesn't have a url key
        # it means that there was an error when we tried to upload
        # so we send back that error message
            errors = [upload]
            return errors

        url = upload["url"]
        new_image = Image(
            image = url,
            title = form.data['title'],
            caption = form.data['caption'],
            owner_id = form.data['owner_id'],
            artist_first_name = form.data['artist_first_name'],
            artist_last_name = form.data['artist_last_name'],
            basic_price = form.data['basic_price'],
            exclusive_price = form.data['exclusive_price'],
            royalty_rate = form.data['royalty_rate']
        )

        db.session.add(new_image)
        db.session.commit()
        return new_image.to_dict()
