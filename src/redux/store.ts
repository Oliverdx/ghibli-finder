import { configureStore } from '@reduxjs/toolkit';

import filmsReducer from './reducers/films';
import peopleReducer from './reducers/people';

export default function configureAppStore (preloadedState) {
  const store = configureStore({
    reducer: {
      films: filmsReducer,
      people: peopleReducer
    },
    preloadedState
  });

  return store;
}