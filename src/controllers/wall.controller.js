// se importan funciones de firebase y de notificacion
import {
  getAuth,
  signOut,
  onAuthStateChanged,
  collection,
  db,
  addDoc,
  getDocs,
  onSnapshot,
} from '../firebase-init.js';

// funcion observador
export const watcher = () => {
  const auth = getAuth();
  let watcherUser;
  let uid;
  onAuthStateChanged(auth, (user) => {
    if (user === null || user === undefined) {
      window.location.hash = '#/';
      watcherUser = null;
    } else {
      watcherUser = user;
      uid = user.uid;
      window.location.hash = '#/wall';
    }
  });
  console.log(watcherUser, 'watcher usuario wall controller');
  console.log(uid, 'watcher id wall controller');
  const currentUserResult = auth.currentUser;
  console.log(currentUserResult, 'currentUserResult usuario wall controller');
  return watcherUser;
};

// funcion para conseguir info user
export const currentUser = () => {
  const watcherResult = watcher();
  console.log(watcherResult, 'watcherResult usuario wall controller');

  const auth = getAuth();
  const user = auth.currentUser;
  if (user === null) {
    window.location.hash = '#/';
  } else {
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

// Función para crear publicación
export const createPublication = (inputPost, genere) => {
  addDoc(collection(db, 'publications'), { inputPost, genere });
};

// Función para leer publicación
export const readPublication = () => {
  getDocs(collection(db, 'publications'));
};

// Función para leer todas las publicación
export const onReadPublication = (querySnapshot) => {
  onSnapshot(collection(db, 'publications'), querySnapshot);
};
