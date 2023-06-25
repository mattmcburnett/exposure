import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import './HomePage.css'
import { useParams } from "react-router-dom";
import { getAllImagesThunk, getUserImagesThunk } from "../../store/image";
import { getAllArtistsThunk } from "../../store/artist";



function HomePage() {

    const currentUser = useSelector(state => state.session.user);
    const dispatch = useDispatch()
    const artists = useSelector(state => state.artist.allArtists);
    const artistsList = artists.users
    const allImages = useSelector(state => state.image.allImages)
    const allImagesList = Object.values(allImages)


    useEffect(() => {
        // dispatch(getAllArtistsThunk())
        dispatch(getAllImagesThunk())
    }, [])



    // useEffect(() => async => {
    //     if(artistsList) {
    //         const featuredArtistsList = artistsList.filter( artist => (
    //             Object.keys(allImages).includes(artist.id)
    //         ))
    //         console.log('fal -> ', featuredArtistsList)
    //     }
    // }, [artistsList])

    // const displayArtistList = []
    // console.log(Object.keys(allImages))

    // const displayObj = {}
    // useEffect(() => async => {
    //     if (artistsList && allImages) {
    //         for (let image of allImages) {
    //             if (Object.keys(allImages).includes(artist.id.toString())) {
    //                 displayObj[artist.id] = allImages[artist.id]
    //             }
    //         }
    //         console.log('displayObj', displayObj)
    //     }
    // }, [allImages, artistsList])


    // <p id="artist-pages-header">Artist Pages</p>
    //                 <div id="home-page-artist-grid-container">
    //                     {artistsList && artistsList.length && artistsList.map(artist => (
    //                         <div id="home-page-grid-item-container" key={artist.id}>
    //                             <img className="home-page-grid-item-image" src={artist.profile_pic}/>
    //                             <div className="home-page-grid-item-text-container">
    //                                 <div className="home-page-grid-item-artist-info">
    //                                     <p className="home-page-grid-item-fname">{artist.first_name}</p>
    //                                     <p className="home-page-grid-item-lname">{artist.last_name}</p>
    //                                 </div>
    //                                 <NavLink to={`/${artist.id}/images`}><p id="see-more-link-text">See more by<br/> this artist</p></NavLink>
    //                             </div>
    //                         </div>
    //                     ))}
    //                 </div>

    return (
        <div id="home-page-wrapper">
            <div id="home-page-container">
                <div id="home-page-header">
                    <h1>Explore and find your inspiration.</h1>
                    <p>Find what you've been looking for. Amazing images and straighforward pricing. </p>
                </div>
                <div id="home-page-image-display">
                    {allImagesList &&
                        allImagesList.map(image => (
                            <NavLink to={`/${image.owner_id}/${image.id}`}>
                                <img className="home-page-grid-image" src={image.image} />
                            </NavLink>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default HomePage
