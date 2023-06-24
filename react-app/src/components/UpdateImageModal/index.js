import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useModal } from "../../context/Modal";
import './UpdateImageModal.css'
import { updateImageThunk } from "../../store/image";


function UpdateImageModal() {

    // console.log('image to update as prop', currentImage)
    //TODO populate form with current image data
    const currentImage = useSelector(state => state.image.currentImage)
    const [title, setTitle] = useState(currentImage.title);
    const [caption, setCaption] = useState(currentImage.caption);
    let [basicPrice, setBasicPrice] = useState(currentImage.basic_price);
    let [exclusivePrice, setExclusivePrice] = useState(currentImage.exclusive_price);
    let [royaltyRate, setRoyaltyRate] = useState(currentImage.royalty_rate);
    const [errors, setErrors] = useState({});
    const dispatch = useDispatch();
    const { closeModal } = useModal();
    const [hasSubmitted, setHasSubmitted] = useState(false)

    useEffect(() => {
        const newErrors = {}

        if(title.length > 40) newErrors.title = 'Title must be less than 40 characters';
        if(title.length === 0) newErrors.title = 'Image must have a title';
        if(caption.length > 255) newErrors.caption = 'Caption must be less than 255 characters';
        if (!(basicPrice > 0) && !(exclusivePrice > 0) && !(royaltyRate > 0)) newErrors.rate = "You must select at least one price for your image";
        if (basicPrice < 0 || exclusivePrice < 0 || royaltyRate < 0) newErrors.rate = "Price must be greater than 0";
        if (royaltyRate > 100) newErrors.rate = 'Royalty rate cannot be above 100%';
        if ((basicPrice && basicPrice.toString().includes('.')) || (exclusivePrice && exclusivePrice.toString().includes('.')) || (royaltyRate && royaltyRate.toString().includes('.'))) newErrors.rate = "Prices must be whole numbers";
        console.log(newErrors)
        setErrors(newErrors);
    }, [title, caption, basicPrice, exclusivePrice, royaltyRate])


    const handleSubmit = async (e) => {
        e.preventDefault();

        setHasSubmitted(true)
        if (Object.values(errors).length > 0) return
        const imageId = currentImage.id;
        if (!basicPrice) basicPrice = 0
        if (!exclusivePrice) exclusivePrice = 0
        if (!royaltyRate) royaltyRate = 0
        const data = await dispatch(updateImageThunk(title, caption, basicPrice, exclusivePrice, royaltyRate, imageId))
        closeModal();
    }

    return (
        <div id='update-image-modal-container'>
            <div id="update-image-modal-header">
                <p>Edit Your Image</p>
            </div>
            <form id="update-image-form" onSubmit={handleSubmit}>
                <label>
                    <div>Title {hasSubmitted === true && errors.title ? <p className="upload-image-errors">{errors.title}</p> : <div></div>}</div>
                    <input
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    ></input>
                </label>
                <label>
                    <div>Description{hasSubmitted === true && errors.caption ? <p className="upload-image-errors">{errors.caption}</p> : <div></div>}</div>
                    <textarea
                        value={caption}
                        onChange={(e) => setCaption(e.target.value)}
                    >
                    </textarea>
                </label>
                <div>{hasSubmitted === true && errors.rate ? <p className="upload-image-errors">{errors.rate}</p> : <div></div>}</div>
                <label>
                    Basic Price
                    <input
                        type="number"
                        min={0}
                        value={basicPrice}
                        onChange={(e) => setBasicPrice(e.target.value)}
                    >
                    </input>
                </label>
                <label>
                    Exclusive Price
                    <input
                        type="number"
                        min={0}
                        value={exclusivePrice}
                        onChange={(e) => setExclusivePrice(e.target.value)}
                    >
                    </input>
                </label>
                <label>
                    Royalty Rate
                    <input
                        type="number"
                        min={0}
                        max={100}
                        value={royaltyRate}
                        onChange={(e) => setRoyaltyRate(e.target.value)}
                    >
                    </input>
                </label>
                <button type="submit">Save Edits<i className="fa-regular fa-floppy-disk"></i></button>
            </form>
        </div>
    )
}

export default UpdateImageModal;
