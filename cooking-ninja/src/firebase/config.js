import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDaZpu1yzVgExP1Zj3rmnLi2YubfIqiWiM',
  authDomain: 'fakestoreapi-eb46a.firebaseapp.com',
  projectId: 'fakestoreapi-eb46a',
  storageBucket: 'fakestoreapi-eb46a.appspot.com',
  messagingSenderId: '37025359460',
  appId: '1:37025359460:web:c25a428f522471c1f8a171',
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init services
const projectFirestore = firebase.firestore();

export { projectFirestore };
