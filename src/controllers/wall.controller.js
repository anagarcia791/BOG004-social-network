// se importan funciones de firebase y de notificacion
import {
  getAuth,
  signOut,
  onAuthStateChanged,
} from '../firebase-init.js';

// funcion para conseguir info user
export const currentUser = () => {
  const auth = getAuth();
  const user = auth.currentUser;
  if (user === null) {
    window.location.hash = '#/';
  } else {
    window.sessionStorage.getItem('islogged');
    console.log(window.sessionStorage.getItem('islogged'));
    window.location.hash = '#/wall';
  }
  return user;
};

// funcion para cerrar sesion
export const signOutUser = () => {
  const auth = getAuth();
  const signOutEvent = signOut(auth);
  return signOutEvent;
};

// funcion observador fanny
export const observador = () => {
  const auth = getAuth();
  return onAuthStateChanged(auth, (user) => user);
};
