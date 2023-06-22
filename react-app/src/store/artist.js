const GET_ARTIST = "artist/GET_ARTIST";
const GET_ALL = "artist/GET_ALL";

const getArtist = (artist) => ({
    type: GET_ARTIST,
    payload: artist
});

const getAllArtists = (artists) => ({
    type: GET_ALL,
    payload: artists
});

export const getOneArtistThunk = (id) => async (dispatch) => {
    console.log(id)

    const res = await fetch(`/api/users/${id}`);
    console.log('res => ', res)
    if (res.ok) {
        const artist = await res.json();
        console.log('artist => ', artist)
        dispatch(getArtist(artist));
        return artist;
    } else {
        const errors = await res.json();
        console.log('errors => ', errors)
        return errors;
    }
}

export const getAllArtistsThunk = () => async (dispatch) => {
    const res = await fetch("/api/users/");

    if (res.ok) {
        const artists = await res.json();
        dispatch(getAllArtists(artists));
        return artists;
    } else {
        const errors = await res.json();
        return errors;
    }
}

const initialState = {currentArtist: {}, allArtists: {}}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case GET_ARTIST:
            const newState = {...state}
            newState.currentArtist = action.payload
            return newState
        case GET_ALL:
            const allArtistsState = {...state}
            allArtistsState.allArtists = action.payload
            return allArtistsState
        default:
            return state
    }
}
