const GET_LICENSE = 'license/GET_LICENSE'
const CREATE_LICENSE = 'license/CREATE'


const getLicense = license => ({
    type: GET_LICENSE,
    payload: license
})


export const createLicenseThunk = (licenseData) => async (dispatch) => {
    console.log('license data price in thunk:', licenseData.get('price'))

    const res = await fetch('/api/licenses/', {
        method: "POST",
        body: licenseData
    });

    if (res.ok) {
        const newLicense = await res.json();
        dispatch(getLicense(newLicense))
        return newLicense
    } else {
        const errors = await res.json();
        return errors;
    }
}



const initialState = {currentLicense: {}, userLicenses: {}}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case GET_LICENSE:
            const newState = {...state}
            newState.userLicenses[action.payload.id] = action.payload
            return newState
        default:
            return state
    }
}
