import React, { useEffect } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
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
	const history = useHistory()

	useEffect(() => {
		if (sessionUser) {
			dispatch(getCartItemsThunk(sessionUser.id))
			// dispatch()
		}
	}, [sessionUser])

	const toLogin = () => {
		history.push('/login')
	}

	const toSignUp = () => {
		history.push('/signup')
	}


	return (
		<div id='navbar-wrapper'>
			<div id='navbar-left-container'>
				<NavLink id='header-logo-and-title' exact to="/"><i class="fa-solid fa-camera"></i><p>Exposure</p></NavLink>

				{isLoaded && sessionUser && (
					<div id='home-link-wrapper'>
						<NavLink id='navbar-home-link' to='/home'>Home</NavLink>
					</div>
				)}
			</div>
			{isLoaded && sessionUser && (
				<div id='navbar-buttons'>
					<NavLink to='/upload'><i id='upload-cloud-icon' className="fa-solid fa-cloud-arrow-up"></i></NavLink>
					<ShoppingCart />
					<ProfileButton user={sessionUser} />
				</div>
			)}
			{isLoaded && !sessionUser && (
				<div id='navbar-buttons-no-user'>
					<button onClick={toLogin} id='login-navbar-button' className='navbar-button-no-user'>Login</button>
					<button onClick={toSignUp} id='signup-navbar-button' className='navbar-button-no-user'>Sign Up</button>
				</div>
			)}
		</div>
	);
}

export default Navigation;
