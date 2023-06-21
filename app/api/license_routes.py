from flask import Blueprint, jsonify, session, request
from flask_login import login_required
from app.models import db, User, Image, License
from .AWS_helpers import get_unique_filename, upload_file_to_s3
from ..forms.image_upload_form import ImageUploadForm
from .auth_routes import validation_errors_to_error_messages
from ..forms.create_license_form import CreateLicenseForm


license_routes = Blueprint('licenses', __name__)


@license_routes.route('/<int:id>/images')
@login_required
def get_user_licenses(id):
    """Query for purchased licenses by user id"""
    #possible issue with to_dict?
    licenses = License.query.filter(License.user_id == id)
    licenses_dict = licenses.to_dict()
    return licenses_dict



@license_routes.route('/', methods=['POST'])
@login_required
def create_license():
    """Create a license for an image"""
    form = CreateLicenseForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        new_license = License(
            user_id = form.data['user_id'],
            image_id = form.data['image_id'],
            artist_first_name = form.data['artist_first_name'],
            artist_last_name = form.data['artist_last_name'],
            image_url = form.data['image_url'],
            title = form.data['title'],
            caption = form.data['caption'],
            type = form.data['type'],
            price = form.data['price']
        )
        # print('form image url 👍👍👍👍👍👍👍👍', form.data['image_url'])

        db.session.add(new_license)
        db.session.commit()
        dict_license = new_license.to_dict()
        dict_license['image'] = new_license.image.to_dict()
        # print('new_license to dict 🍎🍎🍎🍎🍎🍎🍎🍎🍎🍎', new_license.image.to_dict())
        return dict_license

    return {'errors': validation_errors_to_error_messages(form.errors)},401



@license_routes.route('/<int:id>', methods=['DELETE'])
@login_required
def delete_license(id):
    """Delete a license by license id"""
    license_to_delete = License.query.get(id)
    db.session.delete(license_to_delete)
    db.session.commit()
    return 'License has been deleted'
