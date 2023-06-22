import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import './HomePage.css'
import { useParams } from "react-router-dom";
import { getUserImagesThunk } from "../../store/image";
import { getAllArtistsThunk, getOneArtistThunk } from "../../store/artist";



function HomePage() {

    const currentUser = useSelector(state => state.session.user);
    const dispatch = useDispatch()
    const artists = useSelector(state => state.artist.allArtists);
    const artistsList = artists.users

    console.log('artists.users =>', artists.users)

    useEffect(() => {
        dispatch(getAllArtistsThunk())
    }, [])


    return (
        <div id="home-page-wrapper">
            <div id="navbar-extender">
            </div>
            <div id="home-page-header">
                <p>Welcome to the Home Page</p>
            </div>
            <div id="home-page-artist-display">
                <p>Artist pages:</p>
                {artistsList && artistsList.length && artistsList.map(artist => (
                    <div key={artist.id}>
                        <NavLink to={`/${artist.id}/images`}>{artist.first_name}</NavLink>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default HomePage
