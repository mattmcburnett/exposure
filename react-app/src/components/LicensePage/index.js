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
        <div id="single-license-page-container">
            <div id="single-image-bar">
                { license && <img id="single-page-image" src={license.image_url}/>}
            </div>
            <div id="single-license-info-bar">
                <div id="single-license-information">
                    <p id="single-license-title"><span className="single-license-standard-text">Title: </span>{license.title}</p>
                    <div id="single-license-description-container">
                        <p id="single-license-caption"><span className="single-license-standard-text">Description: </span></p>
                        <p id="license-caption-body">{license.caption}</p>
                    </div>
                </div>
                <div id="license-type-container">
                    <p id="license-type-header">License Type: </p>
                    <p>{license.type}</p>
                </div>
                <div id="single-license-artist-information">
                        <i class="fa-solid fa-camera"></i>
                    <div id="single-license-artist-info">
                        <p id="single-license-uploaded-by" className="single-license-standard-text">Image by:</p>
                        <p id="single-license-artist-name">{license.artist_first_name} {license.artist_last_name}</p>
                    </div>
                    {currentUserId === license.user_id && license.type === 'royalty' &&
                        <div id="single-license-edit-license-container">
                            <OpenModalButton
                                buttonText={<div id="single-license-edit-license-text"><p id="single-license-edit-license-text">Cancel Royalty License </p><i className="fa-solid fa-ban"></i></div>}
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
