import axios from 'axios';

export const FETCHING_CHARS = 'FETCHING_CHARS';
export const SUCCESS_CHARS = 'SUCCESS_CHARS';
export const FAILURE_CHARS = 'FAILURE_CHARS';

export const getCharacters = () => dispatch => {
    dispatch({ type: FETCHING_CHARS });

    axios
    .get('https://swapi.co/api/people/')
    .then(response => {console.log(response);
        dispatch({ 
            type: SUCCESS_CHARS, 
            payload: response.data.results 
        });
    })
    .catch(err => dispatch({ 
        type: FAILURE_CHARS, 
        payload: err 
    })
)};


// we'll need axios

// we'll need to create 3 different action types here.
// one for fetching, one for success and one for failure

// our action creator will be a function that returns a function
// the url to fetch characters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based action creator
