import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';
import logo from '../../assets/android-chrome-512x512.png'

function Navigation({ isLoaded }){
	const sessionUser = useSelector(state => state.session.user);

	return (
		<div id='navbar-wrapper'>
			<NavLink id='header-logo-and-title' exact to="/"><i class="fa-solid fa-camera"></i><p>Exposure</p></NavLink>
				{isLoaded && sessionUser && (
					<ProfileButton user={sessionUser} />
				)}
		</div>
	);
}

export default Navigation;
