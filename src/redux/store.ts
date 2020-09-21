import { configureStore } from '@reduxjs/toolkit';

import filmsReducer from './reducers/films';
import peopleReducer from './reducers/people';
import filmsBookmarked from './reducers/bookmarks';
import savedData from './reducers/saved-data';

export default function configureAppStore (preloadedState) {
  const store = configureStore({
    reducer: {
      films: filmsReducer,
      people: peopleReducer,
      bookmarks: filmsBookmarked,
      savedData: savedData
    },
    preloadedState
  });

  return store;
}