import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import './MyImagesPage.css'
import { useParams } from "react-router-dom";
import { getUserImagesThunk } from "../../store/image";
import { getOneArtistThunk } from "../../store/artist";



function MyImagesPage() {

    const currentUser = useSelector(state => state.session.user);
    const {userId} = useParams();
    const dispatch = useDispatch()
    const pageArtist = useSelector(state => state.artist.currentArtist);
    const artistImages = useSelector(state => state.image.userImages);

    useEffect(() => {
        dispatch(getOneArtistThunk(userId))
        dispatch(getUserImagesThunk(userId))
    }, [])


    return (
        <div id="images-page-wrapper">
            <div className="top-banner-container">
                <div className="user-info">
                    <i class="fa-solid fa-camera"></i>
                    {pageArtist && <p>{pageArtist.first_name} {pageArtist.last_name}</p>}
                </div>
                <div className="artist-info">
                    <p>{Object.values(artistImages).length} Image{Object.values(artistImages).length > 1 && <span>s</span>}</p>
                    {pageArtist.created_at && <p>Joined {pageArtist.created_at.split(' ')[3]}</p>}
                </div>
            </div>
            {pageArtist.id === currentUser.id &&
                <div className="artist-page-navbar">
                    <div className="artist-page-navbar-navlinks">
                        <NavLink id='my-images-page-border-bottom' className='indiv-navlinks' to={`/${userId}/images`}><p>My Images</p></NavLink>
                        <NavLink className='indiv-navlinks' to={`/${userId}/licenses`}><p>My Licenses</p></NavLink>
                    </div>
                </div>
            }
            <div className="artist-image-grid-container">
                <p id="image-grid-header">Images</p>
                <div className="images-grid-wrapper">
                        {Object.values(artistImages).length && Object.values(artistImages).map(image => (
                            <div key={image.id} className="artist-page-image-container">
                                <NavLink className='artist-page-image-navlink' to={`/${userId}/${image.id}`}>
                                    <img className="artist-page-grid-image" src={image.image}/>
                                </NavLink>
                            </div>
                        ))}
                </div>
            </div>
        </div>
    )
}

export default MyImagesPage
