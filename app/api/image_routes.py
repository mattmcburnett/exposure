from flask import Blueprint, jsonify, session, request
from flask_login import login_required
from app.models import db, User, Image
from .AWS_helpers import get_unique_filename, upload_file_to_s3
from ..forms.image_upload_form import ImageUploadForm
from .auth_routes import validation_errors_to_error_messages
from ..forms.update_image_form import ImageUpdateForm

image_routes = Blueprint('images', __name__)


@image_routes.route('/')
@login_required
def get_all_images():
    """Get all images that have an owner id"""
    images = Image.query.filter(Image.owner_id != None)
    imgs_dict = {}
    for image in images:
        imgs_dict[image.owner_id] = image.to_dict()
    return imgs_dict


@image_routes.route('/', methods=['POST'])
@login_required
def upload_image():
    """Current user uploads an image"""
    form = ImageUploadForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        image = form.data["image"]
        image.filename = get_unique_filename(image.filename)
        upload = upload_file_to_s3(image)

        # print('upload url ===========', upload['url'])

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
        # print('here the NEW IMAGE', new_image.to_dict())
        return new_image.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)},401


@image_routes.route('/<int:id>/images')
@login_required
def get_user_images(id):
    """Query for user's uploaded images by user Id"""
    #possible issue with to_dict?

    images = Image.query.filter(Image.owner_id == id)
    imgs_list = list(images)
    return_images = {}
    for image in imgs_list:
        return_images[image.id] = image.to_dict()
    # print('return_images 👀👀👀👀👀👀👀👀', return_images)
    return return_images



@image_routes.route('/<int:id>')
@login_required
def view_image(id):
    """Query for a user's image by image Id"""

    current_image = Image.query.get(id)
    return current_image.to_dict()



@image_routes.route('/<int:id>', methods=['PUT'])
@login_required
def update_image(id):
    """Update an image by image id"""

    form = ImageUpdateForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        image = Image.query.get(id)
        image.title = form.data['title']
        # print('image dict after validat on submit', dict_image)
        image.caption = form.data['caption']
        image.basic_price = form.data['basic_price']
        image.exclusive_price = form.data['exclusive_price']
        image.royalty_rate = form.data['royalty_rate']

        db.session.commit()
        dict_image = image.to_dict()
        return dict_image
    return {'errors': validation_errors_to_error_messages(form.errors)},401



@image_routes.route('/<int:id>', methods=['DELETE'])
@login_required
def remove_image(id):
    """Delete an image from a user's images"""

    image_to_remove = Image.query.get(id)
    db.session.delete(image_to_remove)
    db.session.commit()
    return {'message': 'Image had been successfully removed'}
