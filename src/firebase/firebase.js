import * as firebase from 'firebase';

const config = {
  apiKey: `${process.env.REACT_APP_FIREBASE_API_KEY}`,
  authDomain: 'expense-tracker-f423b.firebaseapp.com',
  databaseURL: 'https://expense-tracker-f423b-default-rtdb.firebaseio.com/',
  projectId: 'expense-tracker-f423b',
  storageBucket: 'expense-tracker-f423b.appspot.com',
  messagingSenderId: '117286108879',
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const db = firebase.database();
const auth = firebase.auth();

export { auth, db };
