import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteCartItemThunk, getCartItemsThunk } from '../../store/cart';
import './CheckoutPage.css'

function CheckoutPage() {
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart)
    const sessionUser = useSelector(state => state.session.user);


    const calculatePrice = () => {
        let total = 0;
        console.log(cart)
        cart.forEach(item => {
            if (item.type === 'basic') total += item.image.basic_price
            if (item.type === 'exclusive') total += item.image.exclusive_price
            console.log(total)
        });
        return total
    }


    return (
        <div id="checkout-page-wrapper">
            <div id="checkout-page-container">
                <div id="payment-info-column">
                    <h1>Your Exposure Cart:</h1>
                    <p>Contact</p>
                    <div id="payment-methods-placeholder">
                        <p>Contact coming soon...</p>
                    </div>
                    <p>Payment</p>
                    <div id="payment-methods-placeholder">
                        <p>Payment methods coming soon...</p>
                    </div>
                    <p>Shipping</p>
                    <div id="payment-methods-placeholder">
                        <p>Shipping coming soon...</p>
                    </div>
                </div>
                <div id="cart-items-column">
                    <p> You have {cart.length} items in your cart</p>
                    <ul>
                        {cart.length ?
                            cart.map(cartItem => (
                                <div className="cart-dropdown-item-container" key={cartItem.id}>
                                    <div className="cart-dropdown-content">
                                        <img className="shopping-cart-dropdown-image" src={cartItem.image.image}></img>
                                        <div className="cart-dropdown-info">
                                            <p>{cartItem.image.title}</p>
                                            <p>by {cartItem.image.artist_first_name} {cartItem.image.artist_last_name}</p>
                                            <p>License type: {cartItem.type}</p>
                                        </div>
                                    </div>
                                    <button
                                        onClick={() => dispatch(deleteCartItemThunk(cartItem.id))}
                                        className="cart-dropdown-trash"
                                    >
                                        <i class="fa-solid fa-trash"></i>
                                    </button>
                                </div>
                            ))
                        :
                            <p>Your cart is empty</p>
                        }
                    </ul>
                    <div id="total-checkout-container">
                        <p>Total: ${calculatePrice()}</p>
                        <button id="checkout-page-checkout-button">Checkout</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CheckoutPage
