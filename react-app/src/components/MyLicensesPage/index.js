import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import './MyLicensesPage.css'
import { useParams } from "react-router-dom";
// import OpenModalButton from "../OpenModalButton";
import { getOneArtistThunk } from "../../store/artist";
import { Redirect } from "react-router-dom";
import { getUserLicensesThunk } from "../../store/license";



function MyLicensesPage() {

    const currentUser = useSelector(state => state.session.user);
    const {userId} = useParams();
    const dispatch = useDispatch()
    const pageArtist = useSelector(state => state.artist.currentArtist);
    const licenses = useSelector(state => state.license.userLicenses);
    // console.log(Object.values(artistImages))

    useEffect(() => {
        console.log('userId => ', userId)
        dispatch(getOneArtistThunk(currentUser.id))
            dispatch(getUserLicensesThunk(userId))
    }, [])

    console.log('current user => ', currentUser)
    console.log('userId', userId)

    // if( currentUser && userId !== currentUser.id) {
    //     return <Redirect to='/home'/>
    // }


    return (
        <div id="images-page-wrapper">
            <div className="top-banner-container">
                <div className="user-info">
                    <i class="fa-solid fa-camera"></i>
                    {pageArtist && <p>{pageArtist.first_name} {pageArtist.last_name}</p>}
                </div>
                <div className="artist-info">
                    <p>{Object.values(licenses).length} License{Object.values(licenses).length > 1 && <span>s</span>}</p>
                    {pageArtist.created_at && <p>Joined {pageArtist.created_at.split(' ')[3]}</p>}
                </div>
            </div>
            {/* {pageArtist.id === currentUser.id && */}
                <div className="artist-page-navbar">
                    <div className="artist-page-navbar-navlinks">
                        <NavLink id='my-images-page-border-bottom' className='indiv-navlinks' to={`/${userId}/images`}><p>My Images</p></NavLink>
                        <NavLink className='indiv-navlinks' to={`/${userId}/licenses`}><p>My Licenses</p></NavLink>
                    </div>
                </div>
            {/* } */}
            <div className="artist-image-grid-container">
                <p id="image-grid-header">Licenses</p>
                <div className="images-grid-wrapper">
                        {!Object.values(licenses).length && <p>You have no licenses</p>}
                        {userId && Object.values(licenses).length &&
                            Object.values(licenses).map(license => (
                            <div key={license.id} className="artist-page-image-container">
                                <NavLink className='artist-page-image-navlink' to={`/${userId}/licenses/${license.id}`}>
                                    <img className="artist-page-grid-image" src={license.image_url}/>
                                </NavLink>
                            </div>
                        ))}
                </div>
            </div>
        </div>
    )
}

export default MyLicensesPage
