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
    const [basicPrice, setBasicPrice] = useState(currentImage.basic_price);
    const [exclusivePrice, setExclusivePrice] = useState(currentImage.exclusive_price);
    const [royaltyRate, setRoyaltyRate] = useState(currentImage.royalty_rate);
    const [errors, setErrors] = useState({});
    const dispatch = useDispatch();

    // useEffect(() => {
    //     const newErrors = {}

    //     // if(title.length > 40) newErrors.title = 'Title must be less than 40 characters';
    //     // if(title.length === 0) newErrors.title = 'Image must have a title';
    //     // if(caption.length > 255) newErrors.caption = 'Caption must be less than 255 characters';
    //     // if(!basicPrice && !exclusivePrice && !royaltyRate) newErrors.price = 'Image must have pricing';
    //     // if(basicPrice < 0 || exclusivePrice < 0 || royaltyRate < 0) newErrors.price = 'Please enter valid pricing options'

    //     setErrors(newErrors);
    // }, [title, caption, basicPrice, exclusivePrice, royaltyRate])


    const handleSubmit = async (e) => {
        e.preventDefault();

        // if errors alt
        if (Object.values(errors).length > 0) return
        const imageId = currentImage.id;
        console.log('current image id in handle submit', imageId)
        const data = await dispatch(updateImageThunk(title, caption, basicPrice, exclusivePrice, royaltyRate, imageId))

    }

    return (
        <div>
            <p>Edit Your Image</p>
            <form onSubmit={handleSubmit}>
                <label>
                    <input
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    ></input>
                </label>
                <label>
                    <input
                        value={caption}
                        onChange={(e) => setCaption(e.target.value)}
                    >
                    </input>
                </label>
                <label>
                    <input
                        value={basicPrice}
                        onChange={(e) => setBasicPrice(e.target.value)}
                    >
                    </input>
                </label>
                <label>
                    <input
                        value={exclusivePrice}
                        onChange={(e) => setExclusivePrice(e.target.value)}
                    >
                    </input>
                </label>
                <label>
                    <input
                        value={royaltyRate}
                        onChange={(e) => setRoyaltyRate(e.target.value)}
                    >
                    </input>
                </label>
                <button type="submit">Save</button>
            </form>
        </div>
    )
}

export default UpdateImageModal;
