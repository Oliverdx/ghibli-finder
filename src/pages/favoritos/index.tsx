import { connect } from 'react-redux';
import { useState, useEffect } from 'react';

import Sidebar from '../../components/sidebar/sidebar';
import Card from '../../components/card/card';
import useFavoritos from '../../hooks/useFavoritos';

import { getFilms } from '../../redux/reducers/films';
import { getFilmsBookmarked } from '../../redux/reducers/bookmarks';
import { setNewBookmark, removeBookmark } from '../../redux/actions/bookmarks';

interface Props {
  films: any,
  bookmarks: any,
  setBookmark: Function,
  removeBookmark: Function
}

const Home = ({ films, bookmarks, setBookmark, removeBookmark }: Props): React.ReactElement => {

  const [loading, setLoading] = useState(true);
  const { checkFavorito, handleBookmark } = useFavoritos(bookmarks, setBookmark, removeBookmark);

  useEffect(() => {
    if (films.length)
      setLoading(false);
  }, [films]);

  const showFavoritos = () => {
    if (bookmarks.length) {
      return films.map(film => {
        if (checkFavorito(film.id))
          return <Card
            data={film}
            key={film.id}
            isFavorite={true}
            handleFavoritos={handleBookmark} />;
      });
    }

    return <h2>No Itens Founded</h2>;
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
    bookmarks: getFilmsBookmarked(state).bookmarklist
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setBookmark: newItem => dispatch(setNewBookmark(newItem)),
    removeBookmark: removeItem => dispatch(removeBookmark(removeItem))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
