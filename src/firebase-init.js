// Import the functions you need from the SDKs you need
// eslint-disable-next-line import/no-unresolved
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.8/firebase-app.js';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
// eslint-disable-next-line import/no-unresolved
} from 'https://www.gstatic.com/firebasejs/9.6.8/firebase-auth.js';

// Your web app's Firebase configuration is:
const firebaseConfig = {
  apiKey: 'AIzaSyAnavN3sX6NxYjswJ7HQ2kqXFHgQqI-W_g',
  authDomain: 'red-social-d483a.firebaseapp.com',
  projectId: 'red-social-d483a',
  storageBucket: 'red-social-d483a.appspot.com',
  messagingSenderId: '761140940741',
  appId: '1:761140940741:web:2a4684b62d1419a0ad85ac',
  measurementId: 'G-ESZG030Z67',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// export Firebase functions of auth
export {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
};

// se declara como nuestro proveedor a google
export const provider = new GoogleAuthProvider();
