from flask import Blueprint, jsonify, session, request
from flask_login import login_required
from app.models import db, Comment, User
from ..forms.update_comment_form import UpdateCommentForm
from ..forms.create_comment_form import CreateCommentForm
from .auth_routes import validation_errors_to_error_messages

comment_routes = Blueprint('comments', __name__)

@comment_routes.route('/<int:id>/comments')
@login_required
def get_image_comments(id):
    '''Get all comments for an image'''
    comments = Comment.query.filter(Comment.image_id == id)
    # comments_list = list(comments)
    comments_dict = {}
    for comment in comments:
        user = User.query.get(comment.user_id)
        comments_dict[comment.id] = comment.to_dict()
        comments_dict[comment.id]['user_first_name'] = user.first_name
        comments_dict[comment.id]['user_last_name'] = user.last_name

    return comments_dict


@comment_routes.route('', methods=['POST'])
@login_required
def create_comment():
    """Create a comment for an image"""
    form = CreateCommentForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        new_comment = Comment(
            user_id = form.data['user_id'],
            image_id = form.data['image_id'],
            text = form.data['text']
        )

        db.session.add(new_comment)
        db.session.commit()

        return new_comment.to_dict()

    return {'errors': validation_errors_to_error_messages(form.errors)},401


@comment_routes.route('<int:id>', methods=['PUT'])
@login_required
def update_comment():
    """Update a comment"""
    form = UpdateCommentForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():

        comment = Comment.query.get(id)
        Comment.text = form.data['text']

        db.session.commit()

        return comment.to_dict()

    return {'errors': validation_errors_to_error_messages(form.errors)},401


@comment_routes.route('/<int:id>', methods=['DELETE'])
@login_required
def delete_comment(id):
    """Delete a comment"""

    comment = Comment.query.get(id)
    db.session.delete(comment)
    db.session.commit()

    return {'message': 'Comment has been successfully deleted'}
