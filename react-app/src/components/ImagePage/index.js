import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import './ImagePage.css'
import { useHistory, useParams } from "react-router-dom";
import { getOneImageThunk } from "../../store/image";


function ImagePage() {

    const {imageId} = useParams();
    const [errors, setErrors] = useState('');
    const dispatch = useDispatch();
    const image = useSelector(state => state.image.currentImage)

    useEffect(() => {

        dispatch(getOneImageThunk(imageId))

    }, [])

    return (
        <div id="single-image-page-container">
            <div id="single-image-bar">
                <h1>Hi from image page</h1>
                { image && <img src={image.image}/>}
            </div>
            <div>
                <div id="single-image-information">
                    <p id="single-image-title">{image.title}</p>
                    <p id="single-image-caption">{image.caption}</p>
                </div>
                <div id="single-image-cart-form-container">
                    <p id="single-image-pricing-header">Pricing</p>
                    <div>
                        {image.basic_price &&
                            <form>
                                <label>Basic: {image.basic_price}</label>
                            </form>}
                        {image.exclusive_price && <p>Exclusive: {image.exclusive_price}</p>}
                        {image.royalty_rate && <p>Royalty Rate: {image.royalty_rate}</p>}
                    </div>
                    <form>

                    </form>
                </div>
                <div id="single-image-artist-information"></div>
            </div>
        </div>
    )
}

export default ImagePage
