import  firebase  from 'firebase/app';
import   'firebase/firestore';
import   'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBwyPgesdHOGmWm1gmqIXD81R-O6Vh_BRw",
  authDomain: "journal-app-4b1cb.firebaseapp.com",
  projectId: "journal-app-4b1cb",
  storageBucket: "journal-app-4b1cb.appspot.com",
  messagingSenderId: "96844319542",
  appId: "1:96844319542:web:5bc28f1b3e37df3861c197"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

const googleAuthProvider    =   new firebase.auth.GoogleAuthProvider();

export {
    db,
    googleAuthProvider,
    firebase
}