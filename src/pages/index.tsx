import { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Sidebar from '../components/sidebar/sidebar';
import Card from '../components/card/card';

import { getFilms, getFilmsPending, getFilmsError } from '../redux/reducers/films';

const Home = (props: any): React.ReactElement => {

  return (
    <div className='container'>
      <Sidebar />
      {props.pending ?
        <div className='content-wrapper'>
          LOADING DATA
        </div>
        :
        <div className='content-wrapper card-wrapper'>
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
  };
};

export default connect(mapStateToProps)(Home);
