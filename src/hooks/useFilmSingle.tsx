import { useState } from 'react';
import { useSelector } from 'react-redux';

type dataType = {
  filmData: {
    title: string,
    release_date: string,
    rt_score: string,
    description: string,
    director: string,
    producer: string
  },
  casting: []
};

const useFilmSingle = () => {
  const [data, setData] = useState<dataType>();
  const filmsReducer = useSelector(state => state.films);
  const peopleReducer = useSelector(state => state.people);

  const getFilmData = async (slug = '') => {
    const { films } = await filmsReducer;
    const { people } = await peopleReducer;

    if (!films || !people) {
      return;
    }

    const filmData = films.filter(film => {
      const filmTitle = slug.toLowerCase();
      return film.title.toLowerCase() === filmTitle;
    })[0];

    let casting = people.filter(singlePeople => {
      const filmUrl = singlePeople.films.filter(film => film === filmData?.url);
      return filmUrl.length > 0;
    }).map(cast => cast.name);


    if (peopleReducer.alreadyFetched && !casting.length)
      casting = ['No Cast founded'];

    setData({ filmData, casting });
  };

  return {
    data,
    getFilmData
  };

};

export default useFilmSingle;