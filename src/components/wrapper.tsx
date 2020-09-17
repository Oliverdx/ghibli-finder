import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import fetchFilms from '../redux/selector/films';
import fetchPeople from '../redux/selector/people';

const Wrapper = ({ children }) => {

  const dispatch = useDispatch();

  const getData = async () => {
    await dispatch(fetchFilms());
    await dispatch(fetchPeople());
  };

  useEffect(() => {
    getData();
  }, []);

  return children;
}

export default Wrapper;