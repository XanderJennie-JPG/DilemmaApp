// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDL8Ck5hXYQj1FM1IFo1exiG7RWapdAEso",
  authDomain: "dilemma-app-82643.firebaseapp.com",
  projectId: "dilemma-app-82643",
  storageBucket: "dilemma-app-82643.appspot.com",
  messagingSenderId: "1012981873671",
  appId: "1:1012981873671:web:7c8c01eafb88598747bea2",
  measurementId: "G-GTS7KCDKJG",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const SignInAnon = auth.signInAnonymously();
const firestore = firebase.firestore();
// Initialize Cloud Firestore and get a reference to the service
const db = firebase.firestore();

export { auth };
export { SignInAnon };
export { firestore };
export { db };
