export const WATCH_DATA = 'WATCH_DATA';
export const SET_PERSON_DATA = 'SET_PERSON_DATA';
export const START_LIS = 'START_LIS';
export const ADD_PURCHASE = 'ADD_PURCHASE';
import { firebase } from '../../firebase/config';

export const delay = (ms) => new Promise((res) => setTimeout(res, ms));
export const setPersonData = (personData) => ({
  type: SET_PERSON_DATA,
  payload: personData,
});
export const addPurchase = (nameProduct) => ({
  type: ADD_PURCHASE,
  payload: nameProduct,
});

export const initdata = () => {
  const listDate = [];
  return async function (dispatch) {
    firebase
      .firestore()
      .collection('data')
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((user) => {
          listDate.push(user.data());
        });

        dispatch(setPersonData(listDate));
      });
  };
};
