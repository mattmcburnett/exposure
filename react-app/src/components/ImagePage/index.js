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
import { createCommentThunk, deleteCommentThunk, getImageCommentsThunk } from "../../store/comment";

function ImagePage() {

    const {imageId} = useParams();
    const dispatch = useDispatch();
    const image = useSelector(state => state.image.currentImage);
    const currentUser = useSelector(state => state.session.user);
    const [type, setType] = useState('basic');
    const [errors, setErrors] = useState('');
    const cart = useSelector(state => state.cart);
    const currentUserId = currentUser.id;
    const [itemInCart, setItemInCart] = useState(false);
    const [comment, setComment] = useState('');
    const comments = useSelector(state => state.comment.imageComments)


    useEffect(() => {

        dispatch(getOneImageThunk(imageId))
        const objDiv = document.getElementById("comments-container");
        objDiv.scrollTop = objDiv.scrollHeight;

    }, [])

    useEffect(() => {

        dispatch(getImageCommentsThunk(imageId));

    }, [dispatch])


    const createComment = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('user_id', currentUser.id);
        formData.append('image_id', imageId);
        formData.append('text', comment)

        await dispatch(createCommentThunk(formData))
        setComment('')
        return dispatch(getImageCommentsThunk(imageId))

    }


    const handleSubmit = async (e) => {
        e.preventDefault();

        for (let item of cart) {

            if (image.id === item.image_id) {
                setItemInCart(true);
                return
            }
        }


        const cartItemData = new FormData();
        cartItemData.append("type", type)
        cartItemData.append('user_id', currentUserId)
        cartItemData.append('image_id', image.id)
        dispatch(createCartItemThunk(cartItemData))
        return
    }


    const deleteComment = async (commentId) => {

        await dispatch(deleteCommentThunk(commentId))
        return dispatch(getImageCommentsThunk(imageId))
    }



    return (
        <div id="single-image-page-container">
            <div id="single-image-bar">
                <div id="single-page-image-container">
                    {image && <img id="single-page-image" src={image.image}/>}
                </div>
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
                            {itemInCart && <p id="image-in-cart-error">This image is already in your cart</p>}
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
                        <div id="comments-container">
                            {Object.values(comments).length ?
                                Object.values(comments).map(comment => (
                                    <div key={comment.id} className="comment-content-container">
                                        <div className="comment-info">
                                            <p className="comment-user-name">{comment.user_first_name} {comment.user_last_name}</p>
                                            <p className="comment-date">{comment.created_at.split(' ')[2]} {comment.created_at.split(' ')[1]}, {comment.created_at.split(' ')[3]}</p>
                                        </div>
                                        <div className="comment-text-container">
                                            <p className="comment-text">{comment.text}</p>
                                            {comment.user_id === currentUser.id && <i onClick={() => deleteComment(comment.id)} className="fa-regular fa-trash-can"></i>}
                                        </div>
                                    </div>
                                ))
                                :
                                <div>
                                    <p className="comment-text">Show {image.artist_first_name} some love! Be the first to comment!</p>
                                </div>

                            }
                        </div>
                        <form id="comment-submission-form">
                            <div id="comment-message-bar">
                                <textarea
                                    value={comment}
                                    onChange={(e) => setComment(e.target.value)}
                                    maxLength={200}
                                    minLength={1}
                                    placeholder="Add a comment"
                                >
                                </textarea>
                            </div>
                            <button onClick={createComment} id="create-comment-button"><i className="fa-regular fa-paper-plane"></i></button>
                        </form>
                    </div>
                </div>
                <div id="single-image-artist-information">
                        <i className="fa-solid fa-camera"></i>
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
