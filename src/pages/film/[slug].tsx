import { connect } from 'react-redux';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import Sidebar from '../../components/sidebar/sidebar';
import styles from './film.module.scss';
import useFilmSingle from '../../hooks/useFilmSingle';
import useFavoritos from '../../hooks/useFavoritos';
import { getFilmsBookmarked } from '../../redux/reducers/bookmarks';
import { setNewBookmark, removeBookmark } from '../../redux/actions/bookmarks';

interface Props {
  bookmarks: any,
  setBookmark: Function,
  removeBookmark: Function
}

const Film = ({ bookmarks, setBookmark, removeBookmark }: Props): React.ReactElement => {

  const router = useRouter();
  const { slug } = router.query;

  const [loading, setLoading] = useState(true);
  const [bookmarkIcon, setBookmarkIcon] = useState('heart.png');
  const { data, getFilmData } = useFilmSingle();
  const { checkFavorito, handleBookmark } = useFavoritos(bookmarks, setBookmark, removeBookmark);

  useEffect(() => {
    if (!data?.filmData || !data?.casting.length) {
      getFilmData(slug.toString());
    }

    if (data)
      setLoading(false);

  }, [data]);

  useEffect(() => {
    if (checkFavorito(data?.filmData?.id)) {
      setBookmarkIcon('heart_filled.png');
    } else {
      setBookmarkIcon('heart.png');
    }

  }, [data, bookmarks]);

  return (
    <div className='container'>
      <Sidebar />
      {loading ?
        <div className='content-wrapper'>
          LOADING...
        </div>
        :
        <div className={`content-wrapper ${styles.contentbg}`} >
          <header className={styles.filmHeader}>
            <h1 className={styles.filmTitle}>{data?.filmData?.title}</h1>
            <button className={styles.bookmark} onClick={() => handleBookmark(data?.filmData?.id)} >
              <img src={`/img/${bookmarkIcon}`} alt="heart icon" />
            </button>
            <div className={styles.release}>
              {data?.filmData?.release_date}
            </div>
            <div className={styles.score}>
              <img src="/img/rotten_tomatoes.png" alt="Rotten Tomatoes" className={styles.score_logo} />
              <p className={styles.score_value}>{data?.filmData?.rt_score}</p>
            </div>
          </header>
          <main className={styles.filmContent}>
            <div className={styles.description}>
              <b>Description</b>
              <p>{data?.filmData?.description}</p>
            </div>
            <div className={styles.RightBox}>
              <div className={styles.casting}>
                <b>Cast</b>
                <p>{data?.casting?.join(', ')}</p>
              </div>
              <div className={styles.director}>
                <b>Director</b>
                <p>{data?.filmData?.director}</p>
              </div>
              <div className={styles.producer}>
                <b>Produtor</b>
                <p>{data?.filmData?.producer}</p>
              </div>
            </div>
          </main>
        </div>}
    </div>
  );
};


const mapStateToProps = state => {

  return {
    bookmarks: getFilmsBookmarked(state).bookmarklist
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setBookmark: newItem => dispatch(setNewBookmark(newItem)),
    removeBookmark: removeItem => dispatch(removeBookmark(removeItem))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Film);
