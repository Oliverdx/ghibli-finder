import {
  FETCH_PEOPLE_PENDING,
  FETCH_PEOPLE_SUCCESS,
  FETCH_PEOPLE_ERROR
} from '../actions/people';

const initialState = {
  pending: false,
  people: [],
  error: null
};

export default function peopleReducer (state = initialState, action) {

  switch (action.type) {
    case FETCH_PEOPLE_PENDING:
      return {
        ...state,
        ...state,
        pending: true
      };
    case FETCH_PEOPLE_SUCCESS:
      return {
        ...state,
        pending: false,
        people: action.people
      };
    case FETCH_PEOPLE_ERROR:
      return {
        ...state,
        error: action.error
      };
    default:
      return state;
  }
}

export const getPeople = state => state.people;
export const getPeoplePending = state => state.people.pending;
export const getPeopleError = state => state.people.error;