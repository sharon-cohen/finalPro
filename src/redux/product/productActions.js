export const WATCH_DATA = 'WATCH_DATA';
export const SET_PERSON_DATA = 'SET_PERSON_DATA';
export const START_LIS='START_LIS';
import { firebase } from '../../firebase/config'
export const delay = (ms) => new Promise((res) => setTimeout(res, ms));
const f = firebase;
const setPersonData = (personData) => {
    return {
        type: SET_PERSON_DATA,
        payload: personData
    };
}


export const initdata=()=>{
  const listDate=[]
	return async function(dispatch) {
	await firebase.firestore()	
    .collection('data')
    .get()
    .then(snapshot => {
      snapshot
        .docs
        .forEach(doc => {
          console.log(JSON.parse(doc._document.data.toString()))
		  listDate.push(JSON.parse(doc._document.data.toString()))
        });
		dispatch(setPersonData(docs)) 
    })
	}
}

export const watchPersonData = () => {

	return  async function(dispatch) {
		let docs;
		await firebase.firestore().collection('data')
		.onSnapshot(snapshot => {
			docs = snapshot.docChanges().map(c =>c.doc.data())	
				
			if (docs) {	
				dispatch(setPersonData(docs)) 
			}
		  })
    };
}

