import {
  FETCH_FILMS_PENDING,
  FETCH_FILMS_SUCCESS,
  FETCH_FILMS_ERROR
} from '../actions/films';

const initialState = {
  pending: false,
  films: [],
  error: null
};

export default function filmsReducer (state = initialState, action) {
  switch (action.type) {
    case FETCH_FILMS_PENDING:
      return {
        ...state,
        pending: true
      }
    case FETCH_FILMS_SUCCESS:
      return {
        ...state,
        pending: false,
        films: action.films
      }
    case FETCH_FILMS_ERROR:
      return {
        ...state,
        error: action.error
      }
    default:
      return initialState
  }
};

export const getFilms = state => state.films;
export const getFilmsPending = state => state.films.pending;
export const getFilmsError = state => state.films.error;