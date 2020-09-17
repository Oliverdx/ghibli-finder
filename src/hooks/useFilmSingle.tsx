import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

const useFilmSingle = () => {
  const [data, setData] = useState({} as any);
  const filmsReducer = useSelector(state => state.films);
  const peopleReducer = useSelector(state => state.people);

  const getFilmData = async (slug = '') => {
    const { films } = await filmsReducer;
    const { people } = await peopleReducer;

    if (!films || !people) {
      console.log('Caiu no return');
      return;
    }

    const filmData = films.filter(film => {
      const filmTitle = slug.toLowerCase();
      return film.title.toLowerCase() === filmTitle;
    })[0];

    let casting = people.filter(singlePeople => {
      const filmUrl = singlePeople.films.filter(film => film === filmData?.url);
      return filmUrl.length > 0;
    });

    if (peopleReducer.alreadyFetched && !casting.length)
      casting = ['No Cast founded'];

    setData({ filmData, casting });
  }

  const isPending = () => !filmsReducer.films && !peopleReducer.people;

  return {
    data,
    getFilmData,
    isPending
  };

};

export default useFilmSingle;