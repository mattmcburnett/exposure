// const ADD_IMAGE = "image/ADD_IMAGE";
const GET_IMAGE = "image/GET_IMAGE";
const USER_IMAGES = "image/USER_IMAGES";
const DELETE_IMAGE = "image/DELETE_IMAGE";
const ALL_IMAGES = "image/ALL-IMAGES";

// const addImage = (image) => ({
//     type: ADD_IMAGE,
//     payload: image
// })

const getImage = image => ({
    type: GET_IMAGE,
    payload:image
})

const getUserImages = images => ({
    type: USER_IMAGES,
    payload: images
})

const deleteImage = imageId => ({
    type: DELETE_IMAGE,
    payload:imageId
})

const getAllImages = allImages => ({
    type: ALL_IMAGES,
    payload: allImages
})


export const getAllImagesThunk = () => async (dispatch) => {
    const res = await fetch('/api/images/');

    if(res.ok) {
        const images = await res.json();
        dispatch(getAllImages(images));
        return images
    } else {
        const errors = await res.json()
        return errors;
    }
}


export const getOneImageThunk = (imageId) => async (dispatch) => {
    // console.log('image id in thunk', imageId)

    const res = await fetch(`/api/images/${imageId}`)
    //fetch is sending user id in front of api
    // console.log('res in thunk', res)
    if (res.ok) {
        const image = await res.json();
        dispatch(getImage(image));
        return image;
    } else {
        const errors = await res.json()
        return errors;
    }
}


export const uploadImageThunk = (imageData) => async (dispatch) => {

    const response = await fetch('api/images/', {
        method: "POST",
        body: imageData
    })

    if (response.ok) {
        const newImage = await response.json();
        dispatch(getImage(newImage))
        return newImage
    } else {
        const errors = await response.json();
        return errors;
    }
}


export const getUserImagesThunk = (id) => async (dispatch) => {
    const res = await fetch(`/api/images/${id}/images`);
    if(res.ok) {
        const images = await res.json();
        dispatch(getUserImages(images));
        return images
    } else {
        const errors = await res.json();
        return errors;
    }
}

export const deleteImageThunk = (imageId) => async (dispatch) => {
    const res = await fetch(`/api/images/${imageId}`, {
        method: "DELETE"
    });

    if (res.ok) {
        const message = await res.json();
        dispatch(deleteImage(imageId))
    } else {
        const errors = await res.json()
        return errors
    }
}


export const updateImageThunk = (title, caption, basicPrice, exclusivePrice, royaltyRate, imageId) => async (dispatch) => {

    const formData = new FormData();
    formData.append('title', title);
    formData.append('caption', caption);
    formData.append('basic_price', basicPrice);
    formData.append('exclusive_price', exclusivePrice);
    formData.append('royalty_rate', royaltyRate);

    const res = await fetch(`/api/images/${imageId}`, {
        method: 'PUT',
        body: formData
    });

    if (res.ok) {
        const updatedImage = await res.json();
        dispatch(getImage(updatedImage));
        return updatedImage;
    } else {
        const errors = await res.json();
        return errors;
    }

}


const initialState = {currentImage: {}, userImages: {}, allImages: {}}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case GET_IMAGE:
            const newState = {...state}
            newState.currentImage = action.payload
            return newState
        case USER_IMAGES:
            const allImagesState = {...state}
            allImagesState.userImages = action.payload
            return allImagesState
        case DELETE_IMAGE:
            const deleteState = {...state}
            return deleteState
        case ALL_IMAGES:
            const allUserImagesState = {...state}
            allUserImagesState.allImages = action.payload
            return allUserImagesState
        default:
            return state
    }
}
