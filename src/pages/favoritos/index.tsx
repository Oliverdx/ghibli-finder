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
  const [noBookmarks, setNoBookmarks] = useState('');

  useEffect(() => {
    const getFavoritos = localStorage.getItem('favoritos');
    if (getFavoritos)
      setFavoritos(getFavoritos.split(','));

    setTimeout(() => {
      if (!getFavoritos)
        setNoBookmarks('No content marked as bookmark found');
    }, 2000);

  }, []);

  useEffect(() => {
    if (favoritos.length || noBookmarks)
      setLoading(false);
  }, [favoritos, noBookmarks]);

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
          {noBookmarks ? <h2>{noBookmarks}</h2> : showFavoritos()}
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
