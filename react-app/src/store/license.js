const GET_LICENSE = 'license/GET_LICENSE'
const CREATE_LICENSE = 'license/CREATE'
const ONE_LICENSE = 'license/ONE_LICENSE'
const USER_LICENSES = 'license/USER_LICENSES'
const DELETE_LICENSE = 'license/DELETE_LICENSE'


const getLicense = license => ({
    type: GET_LICENSE,
    payload: license
})

const getOneLicense = license => ({
    type: ONE_LICENSE,
    payload: license
})

const getUserLicenses = licenses => ({
    type: USER_LICENSES,
    payload: licenses
})

const deleteLicense = licenseId => ({
    type: DELETE_LICENSE,
    payload: licenseId
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

export const getOneLicenseThunk = (licenseId) => async (dispatch) => {
    const res = await fetch(`/api/licenses/${licenseId}`);

    if (res.ok) {
        const license = await res.json();
        dispatch(getOneLicense(license));
        return license;
    } else {
        const errors = await res.json();
        return errors;
    }
}

export const getUserLicensesThunk = (userId) => async (dispatch) => {
    const res = await fetch(`/api/licenses/user/${userId}`);

    if (res.ok) {
        const licenses = await res.json();
        dispatch(getUserLicenses(licenses));
        return licenses
    } else {
        const errors = await res.json();
        return errors;
    }
}

export const deleteLicenseThunk = (licenseId) => async (dispatch) => {
    const res = await fetch(`/api/licenses/${licenseId}`, {
        method: "DELETE"
    });

    if (res.ok) {
        const deletedLicense = await res.json();
        dispatch(deleteLicense(licenseId))
    } else {
        const errors = await res.json()
        return errors
    }
}



const initialState = {currentLicense: {}, userLicenses: {}}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case GET_LICENSE:
            const newState = {...state}
            newState.userLicenses[action.payload.id] = action.payload
            return newState
        case ONE_LICENSE:
            const oneState = {...state}
            oneState.currentLicense = action.payload
            return oneState
        case USER_LICENSES:
            const userLicenseState = {...state}
            userLicenseState.userLicenses = action.payload
            return userLicenseState
        case DELETE_LICENSE:
            const deleteState = {...state}
            return deleteState
        default:
            return state
    }
}
