import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import './LicensePage.css'
import { useHistory, useParams } from "react-router-dom";
import OpenModalButton from "../OpenModalButton";
import { getOneLicenseThunk } from "../../store/license";
import CancelLicenseModal from "../CancelLicenseModal";

function LicensePage() {

    const {licenseId} = useParams();
    const dispatch = useDispatch();
    const license = useSelector(state => state.license.currentLicense);
    const currentUser = useSelector(state => state.session.user);
    const [errors, setErrors] = useState('');

    const currentUserId = currentUser.id

    useEffect(() => {

        dispatch(getOneLicenseThunk(licenseId))

    }, [])


    // const handleSubmit = async (e) =>  {
    //     e.preventDefault();
    //     const cartItemData = new FormData();
    //     cartItemData.append("type", type)
    //     cartItemData.append('user_id', currentUserId)
    //     cartItemData.append('image_id', image.id)
    //     dispatch(createCartItemThunk(cartItemData))
    //     return
    // }


    return (
        <div id="single-image-page-container">
            <div id="single-image-bar">
                { license && <img id="single-page-image" src={license.image_url}/>}
            </div>
            <div id="single-image-info-bar">
                <div id="single-image-information">
                    <p id="single-image-title"><span className="single-image-standard-text">Title: </span>{license.title}</p>
                    <p id="single-image-caption"><span className="single-image-standard-text">Description: </span>{license.caption}</p>
                </div>
                {/* {currentUserId !== image.owner_id ?
                    <div id="single-image-cart-form-container">
                        <p id="single-image-pricing-header"><span className="single-image-standard-text">License Pricing:</span></p>
                        <div id="single-image-pricing-info">
                            {image.basic_price && <p><span className="single-image-standard-text">Basic:</span>$ {image.basic_price}</p>}
                            {image.exclusive_price && <p><span className="single-image-standard-text">Exclusive: </span>$ {image.exclusive_price}</p>}
                            {image.royalty_rate && <p><span className="single-image-standard-text">Royalty Rate: </span>{image.royalty_rate} %</p>}
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
                            {image.basic_price && <p><span className="single-image-standard-text">Basic:</span>$ {image.basic_price}</p>}
                            {image.exclusive_price && <p><span className="single-image-standard-text">Exclusive: </span>$ {image.exclusive_price}</p>}
                            {image.royalty_rate && <p><span className="single-image-standard-text">Royalty Rate: </span>{image.royalty_rate} %</p>}
                        </div>
                    </div>
                } */}
                <div>
                    <p>License Type: {license.type}</p>
                </div>
                <div id="single-image-artist-information">
                        <i class="fa-solid fa-camera"></i>
                    <div id="single-image-artist-info">
                        <p id="single-image-uploaded-by" className="single-image-standard-text">Image by:</p>
                        <p id="single-image-artist-name">{license.artist_first_name} {license.artist_last_name}</p>
                    </div>
                    {currentUserId === license.user_id && license.type === 'royalty' &&
                        <div id="single-image-edit-image-container">
                            <OpenModalButton
                                buttonText={<div id="single-image-edit-image-text"><p id="single-image-edit-image-text">Cancel Royalty License </p><i className="fa-solid fa-ban"></i></div>}
                                modalComponent={<CancelLicenseModal />}
                            />
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}


export default LicensePage
