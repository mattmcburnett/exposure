import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useModal } from "../../context/Modal";
import './CancelLicenseModal.css'
import { deleteLicenseThunk } from "../../store/license";
import { useHistory, Redirect } from "react-router-dom";

function CancelLicenseModal() {

    const currentUser = useSelector(state => state.session.user)
    const currentLicense = useSelector(state => state.license.currentLicense)
    const dispatch = useDispatch();
    const { closeModal } = useModal();
    const history = useHistory();

    const cancelLicense = async (e) => {
        e.preventDefault();
        const licenseId = currentLicense.id;
        dispatch(deleteLicenseThunk(licenseId))
        //will redirect work better?
        closeModal();
        history.push(`/${currentUser.id}/licenses`)
        // return <Redirect to={`/${currentUser.id}/licenses`} />
    }

    return (
        <div id='cancel-license-modal-container'>
            <p id="certain-cancellation-header">Are you sure you want to cancel your royalty license?</p>

            <img id="cancellation-license-image" src={currentLicense.image_url}/>
            <p id="license-cancellation-disclaimer">* Any further revenue accrued with the use of this image remains subject to the royalty licensing agreement</p>
            <button id='keep-license-button' onClick={closeModal}>Keep License</button>
            <button onClick={cancelLicense} id="confirm-cancellation-button">Confirm Cancellation</button>
        </div>
    )
}

export default CancelLicenseModal;
