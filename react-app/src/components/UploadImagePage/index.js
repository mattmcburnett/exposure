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
    // const [ownerId, setOwnerId] = useState('');
    // const [artistFirstName, setArtistFirstName] = useState('');
    // const [artistLastName, setArtistLastName] = useState('');
    const [basicPrice, setBasicPrice] = useState(0);
    const [exclusivePrice, setExclusivePrice] = useState(0);
    const [royaltyRate, setRoyaltyRate] = useState(0);
    const [errors, setErrors] = useState({});
    const [hasErrors, setHasErrors] = useState(false)
    const dispatch = useDispatch();
    const history = useHistory();
    const currentUser = useSelector(state => state.session.user)

    useEffect (() => {
        const newErrors = {}
        if (!image) newErrors.image = 'Image is required';
        if (!title) newErrors.title = 'Title is required';
        if (title.length > 255) newErrors.title = 'Title must be less than 255 characters';
        if (caption.length > 400) newErrors.caption = 'Caption must be less than 400 characters'
        if (!basicPrice && !exclusivePrice && !royaltyRate) newErrors.rate = "You must select at least one price to upload an image";
        if (basicPrice < 0 || exclusivePrice < 0 || royaltyRate < 0) newErrors.rate = "Price must be greater than 0";
        if (royaltyRate > 100) newErrors.rate = 'Royalty rate cannot be above 100%';
        if ((basicPrice && basicPrice.includes('.')) || (exclusivePrice && exclusivePrice.includes('.')) || (royaltyRate && royaltyRate.includes('.'))) newErrors.rate = "Prices must be whole numbers";
        setErrors(newErrors);
    }, [image, title, caption, basicPrice, exclusivePrice, royaltyRate])


    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(currentUser)

        if (Object.values(errors).length) {
            setHasErrors(true)
        } else {
            const imageData = new FormData();
            imageData.append('image', image);
            imageData.append('title', title);
            imageData.append('caption' ,caption);
            imageData.append('owner_id', currentUser.id);
            imageData.append('artist_first_name', currentUser.first_name);
            imageData.append('artist_last_name', currentUser.last_name);
            imageData.append('basic_price', basicPrice);
            imageData.append('exclusive_price', exclusivePrice);
            imageData.append('royalty_rate', royaltyRate);
            // console.log(imageData.get('title'));
            const res = await dispatch(uploadImageThunk(imageData));
            // history.push(`/${currentUser.id}/${res.id}`);
        }
    }

    return (
        <div className="upload-image-page-conatiner">
            <div id="upload-image-form-container">
                <form id="upload-image-form" onSubmit={handleSubmit} encType="multipart/form-data">
                    <label>
                        Image File
                        <input
                            type="file"
                            accept="image/*"
                            onChange={(e) => setImage(e.target.files[0])}>
                        </input>
                    </label>
                    <label>
                        Title your image
                        <input
                            type="text"
                            value={(title)}
                            onChange={(e) => setTitle(e.target.value)}
                            required
                            placeholder="Title"
                        ></input>
                    </label>
                    <label>
                        Tell us more about your image
                        <input
                            type="textarea"
                            value={(caption)}
                            onChange={(e) => setCaption(e.target.value)}
                            placeholder="Caption"
                        ></input>
                    </label>
                    <div id="upload-form-image-pricing-container">
                        <label>
                            Set the basic license price for your image
                            <input
                                type="number"
                                value={(basicPrice)}
                                onChange={(e) => setBasicPrice(e.target.value)}
                                placeholder="0"
                            ></input>
                        </label>
                        <label>
                            Set the exclusive license price for your image
                            <input
                                type="number"
                                value={(exclusivePrice)}
                                onChange={(e) => setExclusivePrice(e.target.value)}
                                placeholder="0"
                            ></input>
                        </label>
                        <label>
                            Set the standard royalty rate for your image
                            <input
                                type="number"
                                value={(royaltyRate)}
                                onChange={(e) => setRoyaltyRate(e.target.value)}
                                placeholder="%"
                            ></input>
                        </label>
                    </div>
                    <button type="submit">Upload</button>
                </form>
            </div>
        </div>
    )

}


export default UploadImagePage
