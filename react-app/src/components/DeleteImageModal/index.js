import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useModal } from "../../context/Modal";
import './DeleteImageModal.css'
import { useHistory, Redirect } from "react-router-dom";
import { deleteImageThunk } from "../../store/image";

function DeleteImageModal() {

    const currentUser = useSelector(state => state.session.user)
    const currentImage = useSelector(state => state.image.currentImage)
    const dispatch = useDispatch();
    const { closeModal } = useModal();
    const history = useHistory();

    const cancelLicense = async (e) => {
        e.preventDefault();
        const imageId = currentImage.id;
        dispatch(deleteImageThunk(imageId))
        closeModal();
        history.push(`/${currentUser.id}/images`)
    }

    return (
        <div id='cancel-license-modal-container'>
            <p id="certain-cancellation-header">Are you sure you want to delete this image?</p>
            <img id="cancellation-license-image" src={currentImage.image}/>
            <p id="license-cancellation-disclaimer">* Any user who have purchased a license will still have access to this image file</p>
            <button id='keep-license-button' onClick={closeModal}>Keep Image</button>
            <button onClick={cancelLicense} id="confirm-cancellation-button">Confirm Deletion</button>
        </div>
    )
}

export default DeleteImageModal;
