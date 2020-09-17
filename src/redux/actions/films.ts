export const FETCH_FILMS_PENDING = 'FETCH_FILMS_PENDING';
export const FETCH_FILMS_SUCCESS = 'FETCH_FILMS_SUCCESS';
export const FETCH_FILMS_ERROR = 'FETCH_FILMS_ERROR';

export function fetchFilmsPending () {
  return {
    type: FETCH_FILMS_PENDING
  };
}

export function fetchFilmsSuccess (films) {
  return {
    type: FETCH_FILMS_SUCCESS,
    films: films,
    filmsLoaded: true
  };
}

export function fetchFilmsError (error) {
  return {
    type: FETCH_FILMS_ERROR,
    error: error
  };
}
