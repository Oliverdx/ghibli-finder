import { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Sidebar from '../components/sidebar/sidebar';
import Card from '../components/card/card';
import styles from '../styles/Home.module.scss';
import { getFilms, getFilmsPending, getFilmsError } from '../redux/reducers/films';
import fetchFilms from '../redux/selector/films';

const Home = (props) => {

  useEffect(() => {
    props.fetchFilms();
  }, []);

  return (
    <div className='container'>
      <Sidebar />
      {props.pending ?
        <div className={styles.cardsWrapper}>
          LOADING DATA
        </div>
        :
        <div className={styles.cardsWrapper}>
          {props.films.map(film => <Card data={film} key={film.id} />)}
        </div>
      }
    </div>
  );
};

const mapStateToProps = state => {
  const response = getFilms(state);

  return {
    error: getFilmsError(state),
    films: response.films,
    pending: getFilmsPending(state)
  }
};

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchFilms: fetchFilms
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Home);
