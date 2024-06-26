import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import './HomePage.css'
import { getAllImagesThunk } from "../../store/image";
import { MasonryInfiniteGrid } from "@egjs/react-infinitegrid";


function HomePage() {

    const currentUser = useSelector(state => state.session.user);
    const dispatch = useDispatch()
    const artists = useSelector(state => state.artist.allArtists);
    const artistsList = artists.users
    const allImages = useSelector(state => state.image.allImages)
    const allImagesList = Object.values(allImages)

    useEffect(() => {
        dispatch(getAllImagesThunk())
    }, [])


    return (
        <div id="home-page-wrapper">
            <div id="home-page-container">
                <div id="home-page-header">
                    <h1>Explore and find your inspiration.</h1>
                    <p>Find what you've been looking for. Amazing images and straighforward pricing. </p>
                </div>
                <div id="home-page-image-display">
                    <MasonryInfiniteGrid
                        align="center"
                        gap={5}
                        data-grid-width="100"
                        data-grid-height="100"
                    >
                        {allImagesList &&
                        allImagesList.map(image => (
                            <NavLink key={image.id} to={`/${image.owner_id}/${image.id}`}>
                                <img className="home-page-grid-image" src={image.image} />
                            </NavLink>
                        ))
                        }
                    </MasonryInfiniteGrid>
                    {/* {allImagesList &&
                        allImagesList.map(image => (
                            <NavLink key={image.id} to={`/${image.owner_id}/${image.id}`}>
                                <img className="home-page-grid-image" src={image.image} />
                            </NavLink>
                        ))
                    } */}
                </div>
            </div>
        </div>
    )
}

export default HomePage
