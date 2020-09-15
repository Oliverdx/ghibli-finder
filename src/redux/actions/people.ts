export const GET_PEOPLE_BY_MOVIE = 'GET_PEOPLE_BY_MOVIE';

export function getPeople (movie) {
  return {
    type: GET_PEOPLE_BY_MOVIE,
    people: movie
  }
}