import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import './ImagePage.css'
import { useHistory, useParams } from "react-router-dom";
import { getOneImageThunk } from "../../store/image";
import OpenModalButton from "../OpenModalButton";
import UpdateImageModal from "../UpdateImageModal";
import { createCartItemThunk } from "../../store/cart";
import DeleteImageModal from "../DeleteImageModal";

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
        const cartItemData = new FormData();
        cartItemData.append("type", type)
        cartItemData.append('user_id', currentUserId)
        cartItemData.append('image_id', image.id)
        dispatch(createCartItemThunk(cartItemData))
        return
    }
    console.log(image.royalty_rate
        )


    return (
        <div id="single-image-page-container">
            <div id="single-image-bar">
                { image && <img id="single-page-image" src={image.image}/>}
            </div>
            <div id="single-image-info-bar">
                <div id="single-image-information">
                    <p id="single-image-title"><span className="single-image-standard-text">Title: </span>{image.title}</p>
                    <p id="single-image-caption"><span id="single-image-caption-span" className="single-image-standard-text">Description: </span></p><p id="single-image-description">{image.caption}</p>
                {currentUserId !== image.owner_id ?
                    <div id="single-image-cart-form-container">
                        <p id="single-image-pricing-header"><span className="single-image-standard-text">License Pricing:</span></p>
                        <div id="single-image-pricing-info">
                            {image.basic_price ? <p><span className="single-image-standard-text">Basic:</span>$ {image.basic_price}</p> : <div></div>}
                            {image.exclusive_price ? <p><span className="single-image-standard-text">Exclusive: </span>$ {image.exclusive_price}</p>: <div></div>}
                            {image.royalty_rate ? <p><span className="single-image-standard-text">Royalty Rate: </span>{image.royalty_rate} %</p> : <div></div>}
                        </div>
                        <form id="single-image-add-cart-form" onSubmit={handleSubmit}>
                            <label>
                                <select value={type} onChange={(e) => setType(e.target.value)}>
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
                    :
                    <div id="single-image-cart-form-container">
                        <p id="single-image-pricing-header"><span className="single-image-standard-text">License Pricing:</span></p>
                        <div id="single-image-pricing-info">
                            {image.basic_price ? <p><span className="single-image-standard-text">Basic:</span>$ {image.basic_price}</p> : <div></div>}
                            {image.exclusive_price ? <p><span className="single-image-standard-text">Exclusive: </span>$ {image.exclusive_price}</p> : <></> }
                            {image.royalty_rate ? <p><span className="single-image-standard-text">Royalty Rate: </span>{image.royalty_rate} %</p> : <div></div>}
                        </div>
                    </div>
                }
                </div>
                <div id="comments-section-container">
                    <div id="comments-box-wrapper">
                        <p>Comments Section Coming Soon</p>
                        <div></div>
                        <div id="comment-message-bar">
                            Commenting coming soon...
                        </div>
                    </div>
                </div>
                <div id="single-image-artist-information">
                        <i class="fa-solid fa-camera"></i>
                    <div id="single-image-artist-info">
                        <p id="single-image-uploaded-by" className="single-image-standard-text">Uploaded by:</p>
                        <p id="single-image-artist-name">{image.artist_first_name} {image.artist_last_name}</p>
                        <NavLink id='single-image-artist-link-wrapper' to={`/${image.owner_id}/images`}><p id="single-image-artist-link">See more images from {image.artist_first_name}</p></NavLink>
                    </div>
                    {currentUserId === image.owner_id &&
                        <div id="single-image-edit-image-container">
                            <OpenModalButton
                                buttonText={<div id="single-image-edit-image-text"><p id="single-image-edit-image-text">Edit Image </p><i className="fa-solid fa-pencil"></i></div>}
                                modalComponent={<UpdateImageModal currentImage={image}/>}
                            />
                            <OpenModalButton
                                buttonText={<div id="single-image-edit-image-text"><p id="single-image-edit-image-text">Delete Image </p><i className="fa-solid fa-trash"></i></div>}
                                modalComponent={<DeleteImageModal currentImage={image}/>}
                            />
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}


export default ImagePage
