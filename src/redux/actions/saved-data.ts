export const SET_NEW_DATA = 'SET_NEW_DATA';

export function setNewData (data) {
  return {
    type: SET_NEW_DATA,
    data: data
  };
};