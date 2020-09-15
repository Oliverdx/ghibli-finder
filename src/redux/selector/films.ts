import { fetchFilmsPending, fetchFilmsSuccess, fetchFilmsError } from '../actions/films';

const API_URL = 'https://ghibliapi.herokuapp.com';

function fetchFilms () {
  return dispatch => {
    dispatch(fetchFilmsPending());
    fetch(`${API_URL}/films`)
      .then(res => res.json())
      .then(data => {
        if (data.error) {
          throw (data.error)
        }
        dispatch(fetchFilmsSuccess(data));
        return data
      })
      .catch(error => {
        dispatch(fetchFilmsError(error))
      })
  }
}

export default fetchFilms;