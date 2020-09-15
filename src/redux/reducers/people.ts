import {
  FETCH_PEOPLE_PENDING,
  FETCH_PEOPLE_SUCCESS,
  FETCH_PEOPLE_ERROR
} from '../actions/people';

const initialState = {
  pending: false,
  films: [],
  error: null
};

export default function peopleReducer (state = initialState, action) {
  switch (action.type) {
    case FETCH_PEOPLE_PENDING:
      return {
        ...state,
        pending: true
      }
    case FETCH_PEOPLE_SUCCESS:
      return {
        ...state,
        pending: false,
        films: action.films
      }
    case FETCH_PEOPLE_ERROR:
      return {
        ...state,
        error: action.error
      }
    default:
      return initialState
  }
};

export const getPeople = state => state.people;
export const getPeoplePending = state => state.people.pending;
export const getPeopleError = state => state.people.error;