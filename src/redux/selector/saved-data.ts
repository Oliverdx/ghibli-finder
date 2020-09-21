import { setNewData } from '../actions/saved-data';

function setData () {
  const contentData = localStorage.getItem('contentData');

  if (contentData === null) {
    localStorage.setItem('savedData', '');
    return dispatch => dispatch(setNewData([]));
  }
  else {
    return dispatch => dispatch(setNewData(contentData.split(',')));
  }

}

export default setData;