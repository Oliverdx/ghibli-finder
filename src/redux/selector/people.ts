import { fetchPeoplePending, fetchPeopleSuccess, fetchPeopleError } from '../actions/people';

const API_URL = 'https://ghibliapi.herokuapp.com';

function fetchPeople () {
  return dispatch => {
    dispatch(fetchPeoplePending());
    fetch(`${API_URL}/people`)
      .then(res => res.json())
      .then(data => {
        if (data.error) {
          throw (data.error)
        }
        dispatch(fetchPeopleSuccess(data));
        return data
      })
      .catch(error => {
        dispatch(fetchPeopleError(error))
      })
  }
}

export default fetchPeople;