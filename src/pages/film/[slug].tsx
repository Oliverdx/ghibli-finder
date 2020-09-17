import { useRouter } from 'next/router'
import { connect } from 'react-redux';
import { useEffect, useState } from 'react';
import { getFilms } from '../../redux/reducers/films';

const Movie = (props): React.ReactElement => {

  const [loading, setLoading] = useState(true);

  console.log('Props: ', props);

  if (loading)
    return <div>Loading...</div>

  return (
    <div>
      <div>{props.films.description}</div>
    </div>
  )
};

const mapStateToProps = (state, ownProps) => {
  const slug = 'Only Yesterday';
  const { people, films } = state;

  console.log('State: ', state);

  const filmDetail = films.films.filter(film => film.title === slug)[0] || {};

  return {
    films: filmDetail,
    filmsPending: films.pending,
    people: state.people.people
  }
}

export default connect(mapStateToProps)(Movie);