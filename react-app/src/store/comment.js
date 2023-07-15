const IMAGE_COMMENTS = 'comment/IMAGE_COMMENTS'
const DELETE_COMMENT = 'comment/EDIT_COMMENT'
const CREATE_COMMENT = 'comment/CREATE_COMMENT'

const getImageComments = comments => ({
    type: IMAGE_COMMENTS,
    payload: comments
})

const deleteComment = comment => ({
    type: DELETE_COMMENT,
    payload: comment
})

const createComment = comment => ({
    type: CREATE_COMMENT,
    payload: comment
})


export const createCommentThunk = (commentData) => async (dispatch) => {
    console.log('hitting the create comment thunk', commentData.get('user_id'))
    const res = await fetch(`/api/comments`, {
        method: 'POST',
        body:commentData
    });

    console.log('res', res)

    if (res.ok) {
        const newComment = await res.json();
        dispatch(createComment(newComment));
        return newComment
    } else {
        const errors = await res.json()
        return errors
    }

}


export const getImageCommentsThunk = (imageId) => async (dispatch) => {

    const res = await fetch(`/api/comments/${imageId}/comments`);

    if (res.ok) {
        const comments = await res.json();
        dispatch(getImageComments(comments));
        return comments;
    } else {
        const errors = await res.json()
        return errors
    }

}

export const deleteCommentThunk = (commentId) => async (dispatch) => {

    const res = await fetch(`/api/comments/${commentId}`, {
        method: "DELETE"
    });

    console.log('res ===>', res)

    if (res.ok) {
        const message = await res.json();
        dispatch(deleteComment(commentId));
    } else {
        const errors = await res.json()
        return errors
    }

}




const initialState = {imageComments: {}, oneComment: {}}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case IMAGE_COMMENTS:
            const newState = {...state}
            newState.imageComments = action.payload
            return newState
        case CREATE_COMMENT:
            const newCommentState = {...state}
            newCommentState.imageComments[action.payload.id] = action.payload
            return newCommentState
        case DELETE_COMMENT:
            const deleteState = {...state}
            delete deleteState.imageComments[action.payload]
            return deleteState
        default:
            return state
    }
}
