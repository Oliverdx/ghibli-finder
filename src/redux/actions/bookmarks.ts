export const SET_FILM_BOOKMARK = 'SET_FILM_BOOKMARK';
export const SET_NEW_BOOKMARK = 'SET_NEW_BOOKMARK';
export const REMOVE_BOOKMARK_ITEM = 'REMOVE_BOOKMARK_ITEM';

export function setFilmsBookmark (films) {
  return {
    type: SET_FILM_BOOKMARK,
    bookmarkList: films,
  };
};

export function setNewBookmark (item) {
  return {
    type: SET_NEW_BOOKMARK,
    item: item
  }
}

export function removeBookmark (item) {
  return {
    type: REMOVE_BOOKMARK_ITEM,
    item: item
  }
}