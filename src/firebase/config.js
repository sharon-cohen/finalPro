import * as firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCelv0qxvzh-nWRVjZxY1koo4snj2Xse_g',
  authDomain: 'finalpro-c979d.firebaseapp.com',
  projectId: 'finalpro-c979d',
  storageBucket: 'finalpro-c979d.appspot.com',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase };
