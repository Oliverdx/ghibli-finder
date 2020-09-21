import { connect } from 'react-redux';
import { useState, useEffect } from 'react';

import Sidebar from '../components/sidebar/sidebar';
import Card from '../components/card/card';
import useFavoritos from '../hooks/useFavoritos';

import { getFilms } from '../redux/reducers/films';
import { getFilmsBookmarked } from '../redux/reducers/bookmarks';
import { setNewBookmark, removeBookmark } from '../redux/actions/bookmarks';

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
    if (films.length || bookmarks)
      setLoading(false);
  }, [films, bookmarks]);


  return (
    <div className='container'>
      <Sidebar />
      {loading ?
        <div className='content-wrapper'>
          LOADING DATA
        </div>
        :
        <div className='content-wrapper card-wrapper'>
          {films.map(item => <Card
            data={item}
            key={item.id}
            isFavorite={checkFavorito(item.id)}
            handleFavoritos={handleBookmark} />)}
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
