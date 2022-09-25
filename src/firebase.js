// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyA6QWPepggTnAKYyOB2BhXJRSnG0apWOC0",
  authDomain: "challenge-ce4ed.firebaseapp.com",
  projectId: "challenge-ce4ed",
  storageBucket: "challenge-ce4ed.appspot.com",
  messagingSenderId: "590013328172",
  appId: "1:590013328172:web:7c0d0f0b02353686cdda89",
  measurementId: "G-S6SG9JB8TK"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { auth, db };