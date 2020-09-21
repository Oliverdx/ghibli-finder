import { setFilmsBookmark } from '../actions/bookmarks';

function setBookmarks () {
  const favoritos = localStorage.getItem('favoritos');

  if (favoritos === null) {
    localStorage.setItem('favoritos', '');
    return dispatch => dispatch(setFilmsBookmark([]));
  }
  else {
    return dispatch => dispatch(setFilmsBookmark(favoritos.split(',')));
  }

}

export default setBookmarks;