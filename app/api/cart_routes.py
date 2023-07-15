from flask import Blueprint, jsonify, session, request
from flask_login import login_required
from app.models import db, CartItem
from ..forms.add_to_cart_form import AddToCartForm
from .auth_routes import validation_errors_to_error_messages


cart_routes = Blueprint('cart_items', __name__)


@cart_routes.route('/<int:id>')
@login_required
def get_cart_items(id):
    """Get all cart items for a user"""
    items = CartItem.query.filter(CartItem.user_id == id)
    # items_dict = items.to_dict()
    print('🍕🍕🍕🍕🍕🍕🍕🍕🍕🍕🍕', items)
    cart_items = {}
    for item in items:
        cart_items[item.id] = item.to_dict()
    # print('HERE ISE THE ITEMS LIST', items_list)
    return cart_items


@cart_routes.route('', methods=['POST'])
@login_required
def add_to_cart():
    """Add an item to a users cart / create a cart item"""
    print('HITTING THE CART ITEM ROUTE')
    form = AddToCartForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    print('Form DATA 🔥🔥🔥🔥🔥🔥🔥🔥', form.data)
    if form.validate_on_submit():
        cart_item = CartItem(
            user_id = form.data['user_id'],
            image_id = form.data['image_id'],
            type = form.data['type']
        )
        db.session.add(cart_item)
        db.session.commit()
        return cart_item.to_dict()

    print('getting an error')
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401



@cart_routes.route('/<int:id>', methods=['DELETE'])
@login_required
def delete_from_cart(id):
    """Deletes a Cart Item by id"""
    item_to_delete = CartItem.query.get(id)
    db.session.delete(item_to_delete)
    db.session.commit()

    return {'message': 'Item successfully deleted'}
