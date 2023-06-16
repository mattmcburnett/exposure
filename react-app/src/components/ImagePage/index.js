import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import './ImagePage.css'
import { useHistory, useParams } from "react-router-dom";
import { getOneImageThunk } from "../../store/image";
import OpenModalButton from "../OpenModalButton";
import UpdateImageModal from "../UpdateImageModal";


function ImagePage() {

    const {imageId} = useParams();
    const dispatch = useDispatch();
    const image = useSelector(state => state.image.currentImage);
    const currentUser = useSelector(state => state.session.user);
    const [type, setType] = useState('basic');
    const [errors, setErrors] = useState('');

    const currentUserId = currentUser.id

    useEffect(() => {

        dispatch(getOneImageThunk(imageId))

    }, [])


    const handleSubmit = async (e) =>  {
        e.preventDefault();
        //TODO cart creation
    }


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
                    <form onSubmit={handleSubmit}>
                        <label>
                            <select>
                                <option value='basic'>Basic</option>
                                <option value='exclusive'>Exclusive</option>
                                <option value='royalty'>Royalty</option>
                            </select>
                        </label>
                        <button type="submit">
                            Add to Cart
                        </button>
                    </form>
                </div>
                <div id="single-image-artist-information">
                    <div>
                        <p>{image.artist_first_name}</p>
                        <p>{image.artist_last_name}</p>
                    </div>
                    {currentUserId === image.owner_id &&
                        <OpenModalButton
                            buttonText={<i className="fa-solid fa-pencil"></i>}
                            modalComponent={<UpdateImageModal currentImage={image}/>}
                        />
                    }
                </div>
            </div>
        </div>
    )
}

export default ImagePage
