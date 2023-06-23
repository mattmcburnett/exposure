import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import './UploadImagePage.css'
import { useHistory } from "react-router-dom";
import { uploadImageThunk } from "../../store/image";





function UploadImagePage() {

    const [image, setImage] = useState();
    const [title, setTitle] = useState('');
    const [caption, setCaption] = useState('');
    const [basicPrice, setBasicPrice] = useState('');
    const [exclusivePrice, setExclusivePrice] = useState('');
    const [royaltyRate, setRoyaltyRate] = useState('');
    const [errors, setErrors] = useState({});
    // const [hasErrors, setHasErrors] = useState(false)
    const [hasSubmitted, setHasSubmitted] = useState(false)
    const dispatch = useDispatch();
    const history = useHistory();
    const currentUser = useSelector(state => state.session.user)



    useEffect (() => {
        const newErrors = {}
        if (!image) newErrors.image = 'Image is required';
        if (!title) newErrors.title = 'Title is required';
        if (title.length > 55) newErrors.title = 'Title must be less than 255 characters';
        if (caption.length > 400) newErrors.caption = 'Caption must be less than 400 characters'
        if (!(basicPrice > 0) && !(exclusivePrice > 0) && !(royaltyRate > 0)) newErrors.rate = "You must select at least one price to upload an image";
        if (basicPrice < 0 || exclusivePrice < 0 || royaltyRate < 0) newErrors.rate = "Price must be greater than 0";
        if (royaltyRate > 100) newErrors.rate = 'Royalty rate cannot be above 100%';
        if ((basicPrice && basicPrice.includes('.')) || (exclusivePrice && exclusivePrice.includes('.')) || (royaltyRate && royaltyRate.includes('.'))) newErrors.rate = "Prices must be whole numbers";
        console.log(newErrors)
        setErrors(newErrors);
    }, [image, title, caption, basicPrice, exclusivePrice, royaltyRate])


    const handleSubmit = async (e) => {
        e.preventDefault();
        setHasSubmitted(true);

        if (Object.values(errors).length) return;

        const imageData = new FormData();
        imageData.append('image', image);
        imageData.append('title', title);
        imageData.append('caption', caption);
        imageData.append('owner_id', currentUser.id);
        imageData.append('artist_first_name', currentUser.first_name);
        imageData.append('artist_last_name', currentUser.last_name);
        if (basicPrice !== '') imageData.append('basic_price', basicPrice);
        if (exclusivePrice !== '') imageData.append('exclusive_price', exclusivePrice);
        if (royaltyRate !== '') imageData.append('royalty_rate', royaltyRate);

        const res = await dispatch(uploadImageThunk(imageData));
        history.push(`/${currentUser.id}/${res.id}`);

    }

    return (
        <div className="upload-image-page-container">
            <div id="upload-image-form-container">
                <form id="upload-image-form" onSubmit={handleSubmit} encType="multipart/form-data">
                    <label id="image-file">
                        <p id="image-file-header">Upload your image</p>
                        {hasSubmitted === true && errors.image ? <p className="upload-image-errors">{errors.image}</p> : <div></div>}
                        <input
                            id="image-file-input"
                            type="file"
                            accept="image/*"
                            onChange={(e) => setImage(e.target.files[0])}>
                        </input>

                    </label>
                    {hasSubmitted === true && errors.title ? <p className="upload-image-errors">{errors.title}</p> : <div></div>}
                    <label>
                        Title your image
                        <input
                            className="upload-image-input"
                            type="text"
                            value={(title)}
                            onChange={(e) => setTitle(e.target.value)}
                            required
                            placeholder="Title"
                        ></input>
                    </label>
                    {hasSubmitted === true && errors.caption ? <p className="upload-image-errors">{errors.caption}</p> : <div></div>}
                    <label>
                        Tell us more about your image
                        <textarea
                            className="upload-image-input"
                            type="textarea"
                            value={(caption)}
                            onChange={(e) => setCaption(e.target.value)}
                            placeholder="Image description"
                        ></textarea>
                    </label>
                    <div id="upload-form-image-pricing-container">
                        {hasSubmitted === true && errors.rate ? <p className="upload-image-errors">{errors.rate}</p> : <div></div>}
                        <label>
                            <p className="license-price-label-content">Set the basic license price <i className="fa-solid fa-circle-question"></i></p>
                            <input
                                id="license-price-input"
                                className="upload-image-input"
                                type="number"
                                value={(basicPrice)}
                                onChange={(e) => setBasicPrice(e.target.value)}
                                placeholder="$"
                                min={0}
                            ></input>
                        </label>
                        <label>
                            <p className="license-price-label-content">Set the exclusive license price <i className="fa-solid fa-circle-question"></i></p>
                            <input
                                id="license-price-input"
                                className="upload-image-input"
                                type="number"
                                value={(exclusivePrice)}
                                onChange={(e) => setExclusivePrice(e.target.value)}
                                placeholder="$"
                                min={0}
                            ></input>
                        </label>
                        <label>
                            <p className="license-price-label-content">Set the standard royalty rate <i className="fa-solid fa-circle-question"></i></p>
                            <input
                                id="license-price-input"
                                className="upload-image-input"
                                type="number"
                                value={(royaltyRate)}
                                onChange={(e) => setRoyaltyRate(e.target.value)}
                                placeholder="%"
                                min={0}
                                max={100}
                            ></input>
                        </label>
                    </div>
                    <button id='upload-image-submit-button' type="submit">Upload Image</button>
                </form>
            </div>
        </div>
    )

}


export default UploadImagePage
