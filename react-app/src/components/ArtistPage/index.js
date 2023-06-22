import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import './ArtistPage.css'
import { useHistory, useParams } from "react-router-dom";
import { uploadImageThunk } from "../../store/image";


// NOT IN USE

function ArtistPage() {

    const {userId} = useParams()
    const dispatch = useDispatch();
    // const artist = dispatch()
    // const images = dispatch
    // will we dispatch in a useEffect?

    return (
        <div id="artist-page-wrapper">
            <div id="artist-page-top-banner-bar">
                <div id="artist-page-artist-pic-name">
                    <img></img>
                    <p></p>
                </div>
            </div>
            <div id='user-nav-bar-links'>

            </div>

            <div id="artist-page-image-grid">

            </div>
        </div>
    )
}
