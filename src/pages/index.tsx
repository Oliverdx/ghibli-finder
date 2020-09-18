import { connect } from 'react-redux';

import Sidebar from '../components/sidebar/sidebar';
import Card from '../components/card/card';

import { getFilms, getFilmsPending } from '../redux/reducers/films';

interface Props {
  films: any,
  pending: boolean
}

const Home = ({ films, pending }: Props): React.ReactElement => {

  return (
    <div className='container'>
      <Sidebar />
      {pending ?
        <div className='content-wrapper'>
          LOADING DATA
        </div>
        :
        <div className='content-wrapper card-wrapper'>
          {films.map(film => <Card data={film} key={film.id} />)}
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

export default connect(mapStateToProps)(Home);
