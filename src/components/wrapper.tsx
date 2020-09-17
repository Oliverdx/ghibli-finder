import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import fetchFilms from '../redux/selector/films';
import fetchPeople from '../redux/selector/people';

const Wrapper = ({ children }) => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFilms());
    dispatch(fetchPeople());
  }, []);

  return children;
}

export default Wrapper;