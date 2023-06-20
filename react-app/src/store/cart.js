const CREATE_ITEM = 'cartItem/CREATE_ITEM'
const GET_ITEMS = 'createItems/GET_ITEMS'
const DELETE_ITEM = 'deleteItem/DELETE_ITEM'

const createCartItem = cartItem => ({
    type: CREATE_ITEM,
    payload: cartItem
})

const getCartItems = cartItems => ({
    type: GET_ITEMS,
    payload: cartItems
})

const deleteCartItem = itemId => ({
    type: DELETE_ITEM,
    payload: itemId
})



export const createCartItemThunk = (itemData) => async (dispatch) => {
    console.log('cart item data', itemData.get('type'))
    const res = await fetch('/api/cart', {
        method: "POST",
        body: itemData
    })

    if (res.ok) {
        const cartItem = await res.json();
        dispatch(createCartItem(cartItem))
        return cartItem
    } else {
        const errors = await res.json()
        return errors
    }
}


export const getCartItemsThunk = (id) => async (dispatch) => {
    const res = await fetch(`/api/cart/${id}`)
    if (res.ok) {
        const cartItems = await res.json();
        const itemsList = Object.values(cartItems)
        console.log('cart items after fetch in get cart items thunk = ', itemsList)
        dispatch(getCartItems(itemsList))
    } else {
        const errors = await res.json()
        return errors
    }

}


export const deleteCartItemThunk = (itemId) => async (dispatch) => {
    const res = await fetch(`/api/cart/${itemId}`, {
        method: 'DELETE'
    })
    if (res.ok) {
        const deleteMessage = await res.json();
        dispatch(deleteCartItem(itemId))
    } else {
        const errors = await res.json()
        return errors
    }

}



const initialState = []

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case CREATE_ITEM:
            const newState = [...state]
            newState.push(action.payload)
            return newState
        case GET_ITEMS:
            const getItemsState = [...state]
            console.log('action payload', action.payload)
            const itemsList = action.payload
            itemsList.forEach(element => {
                getItemsState.push(element)
            });
            return getItemsState
        case DELETE_ITEM:
            const deleteItemsState = [...state]
            const deleteItemObj = {}
            deleteItemsState.map( element => {
                deleteItemObj[element.id] = element
            });
            delete deleteItemObj[action.payload]
            const deleteReturnState = Object.values(deleteItemObj)
            return deleteReturnState
        default:
            return state
    }
}
