// const ADD_IMAGE = "image/ADD_IMAGE";
const GET_IMAGE = "image/GET_IMAGE";

// const addImage = (image) => ({
//     type: ADD_IMAGE,
//     payload: image
// })

const getImage = image => ({
    type: GET_IMAGE,
    payload:image
})


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
        const errors = await res.json();
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
        console.log('newImage: ', newImage)
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
            newState.currentImage = action.payload
            return newState
        default:
            return state
    }
}
