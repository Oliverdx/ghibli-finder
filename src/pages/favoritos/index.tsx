import { connect } from 'react-redux';

import Sidebar from '../../components/sidebar/sidebar';
import Card from '../../components/card/card';

import { getFilms, getFilmsPending } from '../../redux/reducers/films';
import { useState, useEffect } from 'react';

interface Props {
  films: any
}

const Favoritos = ({ films }: Props): React.ReactElement => {

  const [favoritos, setFavoritos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getFavoritos = localStorage.getItem('favoritos');
    if (getFavoritos)
      setFavoritos(getFavoritos.split(','));

  }, []);

  useEffect(() => {
    if (favoritos.length)
      setLoading(false);
  }, [favoritos]);

  const showFavoritos = () => {
    const itens = films.filter(film => {
      return favoritos.some(favorito => favorito === film.id);
    });

    return itens.map(item => <Card data={item} key={item.id} isFavorite={true} />);
  };

  return (
    <div className='container'>
      <Sidebar />
      {loading ?
        <div className='content-wrapper'>
          LOADING DATA
        </div>
        :
        <div className='content-wrapper card-wrapper'>
          {showFavoritos()}
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
