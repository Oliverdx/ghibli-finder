export const FETCH_PEOPLE_PENDING = 'FETCH_PEOPLE_PENDING';
export const FETCH_PEOPLE_SUCCESS = 'FETCH_PEOPLE_SUCCESS';
export const FETCH_PEOPLE_ERROR = 'FETCH_PEOPLE_ERROR';

export function fetchPeoplePending () {
  return {
    type: FETCH_PEOPLE_PENDING
  };
}

export function fetchPeopleSuccess (people) {
  return {
    type: FETCH_PEOPLE_SUCCESS,
    people: people
  };
}

export function fetchPeopleError (error) {
  return {
    type: FETCH_PEOPLE_ERROR,
    error: error
  };
}