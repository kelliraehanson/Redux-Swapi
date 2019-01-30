import {
  FETCHING_CHARS,
  SUCCESS_CHARS,
  FAILURE_CHARS
} from "../actions";
  /* we need our action types here*/ 
const initialState = {
  characters: [],
  fetching: false,
  error: null
  // Array characters, Boolean fetching, null error.
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_CHARS:
    return {
      ...state,
      fetching: true,
      error: null
    };
    case SUCCESS_CHARS:
    return {
      ...state,
      characters: action.payload,
      fetching: false,
      error: null
    }
    case FAILURE_CHARS:
    return {
      ...state,
      error: action.payload,
      fetching: false
    }
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    default:
      return state;
  }
};
