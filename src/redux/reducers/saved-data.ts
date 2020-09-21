import {
  SET_NEW_DATA
} from '../actions/saved-data';

const initialState = {
  savedData: []
};

function addNewData (state, newData) {
  const newSavedData = state.savedData[0] === '' ? [newData] : [...state.savedData, newData];
  localStorage.setItem('savedData', newSavedData.toString());
  return newSavedData;
}

export default function savedData (state = initialState, action) {
  switch (action.type) {
    case SET_NEW_DATA:
      return {
        ...state,
        savedData: addNewData(state, action.item)
      };
    default:
      return state;
  }
}

export const getDataById = (state, id) => {
  const allData = state.savedData;
  const result = allData.filter(singleData => singleData.id === id);

  return result[0];
}