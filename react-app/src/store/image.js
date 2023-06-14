const ADD_IMAGE = "image/ADD_IMAGE";
const GET_IMAGE = "image/GET_IMAGE";

const addImage = (image) => ({
    type: ADD_IMAGE,
    payload: image
})

const getImage = image => ({
    type: GET_IMAGE,
    payload:image
})




export const uploadImageThunk = (imageData) = async (dispatch) => {

    const response = await fetch('api/images', {
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


const initialState = {currentImage: {}, userImages: {}}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case GET_IMAGE:
            const newState = {...state}
            newState.currentImage = action.image
            return newState
        default:
            return state
    }
}
