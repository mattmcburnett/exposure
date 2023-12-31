import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteCartItemThunk, getCartItemsThunk } from '../../store/cart';
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

function ShoppingCart() {

    const dispatch = useDispatch();
    const [showCart, setShowCart] = useState(false);
    const ulRef = useRef();
    const cart = useSelector(state => state.cart)
    const sessionUser = useSelector(state => state.session.user);

    const openCart = () => {
        if (showCart) return;
        setShowCart(true);
    };

    useEffect(() => {
        if (!showCart) return;

        const closeCart = (e) => {
          if (!ulRef.current.contains(e.target)) {
            setShowCart(false);
          }
        };

        document.addEventListener("click", closeCart);

        return () => document.removeEventListener("click", closeCart);
    }, [showCart]);

    const ulClassName = "profile-dropdown" + (showCart ? "" : " hidden");
    const closeCart = () => setShowCart(false);

    return (
        <div>
            <button id="cart-button" onClick={openCart}>
                <i id="cart-icon-button" className="fa-solid fa-cart-shopping"></i>
				<p id='items-in-cart-number'>{cart.length}</p>
            </button>
            <div id="shopping-cart-dropdown" className={ulClassName} ref={ulRef}>
                <div id="cart-dropdown-header">
                    <i className="fa-solid fa-cart-shopping"></i>
                    <p>Your Cart:</p>
                </div>
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
                                    <i className="fa-solid fa-trash"></i>
                                </button>
                            </div>
                        ))
                    :
                        <p>Your cart is empty</p>
                    }
                </ul>
                <NavLink to='/cart'><button onClick={closeCart} id="cart-dropdown-checkout-button">Checkout</button></NavLink>
            </div>
        </div>
    )
}

export default ShoppingCart
