import {
  SET_FILM_BOOKMARK,
  SET_NEW_BOOKMARK,
  REMOVE_BOOKMARK_ITEM
} from '../actions/bookmarks';

const initialState = {
  bookmarklist: []
};

function addBookMarkItem (state = initialState, item) {
  const newBookmark = [...state.bookmarklist, item];
  localStorage.setItem('favoritos', newBookmark.toString());
  return newBookmark;
};

function removeBookMarkItem (bookmarks, item) {

  if (bookmarks.length === 1) {
    localStorage.setItem('favoritos', '');
    return [];
  }

  const newBookmark = bookmarks.filter(bookmark => bookmark !== item);
  localStorage.setItem('favoritos', newBookmark.toString());
  return newBookmark;
};

export default function filmsBookmarked (state = initialState, action) {
  switch (action.type) {
    case SET_FILM_BOOKMARK:
      return {
        ...state,
        bookmarklist: action.bookmarkList
      };
    case SET_NEW_BOOKMARK:
      return {
        ...state,
        bookmarklist: addBookMarkItem(state, action.item)
      };
    case REMOVE_BOOKMARK_ITEM:
      console.log('Removendo item', action.item);
      return {
        ...state,
        bookmarklist: removeBookMarkItem(state.bookmarklist, action.item)
      };
    default:
      return state;
  }
}

export const getFilmsBookmarked = state => state.bookmarks;