import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';
import logo from '../../assets/android-chrome-512x512.png'
import { getCartItemsThunk } from '../../store/cart';
import ShoppingCart from './ShoppingCart';

function Navigation({ isLoaded }){
	const sessionUser = useSelector(state => state.session.user);
	const cart = useSelector(state => state.cart)
	const dispatch = useDispatch()
	// console.log('sessionuser ---->', sessionUser)

	useEffect(() => {
		if (sessionUser) {
			dispatch(getCartItemsThunk(sessionUser.id))
			// dispatch()
		}
	}, [sessionUser])



	return (
		<div id='navbar-wrapper'>
			<NavLink id='header-logo-and-title' exact to="/"><i class="fa-solid fa-camera"></i><p>Exposure</p></NavLink>
			{isLoaded && sessionUser && (
				<div id='navbar-buttons'>
					<NavLink to='/upload'><i id='upload-cloud-icon' className="fa-solid fa-cloud-arrow-up"></i></NavLink>
					<ShoppingCart />
					<ProfileButton user={sessionUser} />
				</div>
			)}
		</div>
	);
}

export default Navigation;
