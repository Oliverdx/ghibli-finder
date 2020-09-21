import { connect } from 'react-redux';

import Sidebar from '../components/sidebar/sidebar';
import Card from '../components/card/card';
import useFavoritos from '../hooks/useFavoritos';

import { getFilms, getFilmsPending } from '../redux/reducers/films';
import { useState, useEffect } from 'react';

interface Props {
  films: any
}

const Favoritos = ({ films }: Props): React.ReactElement => {

  const [loading, setLoading] = useState(true);
  const { favoritos } = useFavoritos();

  useEffect(() => {
    if (films.length || favoritos.length)
      setLoading(false);
  }, [films, favoritos]);

  return (
    <div className='container'>
      <Sidebar />
      {loading ?
        <div className='content-wrapper'>
          LOADING DATA
        </div>
        :
        <div className='content-wrapper card-wrapper'>
          {films.map(item => <Card data={item} key={item.id} />)}
        </div>
      }
    </div>
  );
};

const mapStateToProps = state => {

  return {
    films: getFilms(state).films,
    pending: getFilmsPending(state)
  };
};

export default connect(mapStateToProps)(Favoritos);
