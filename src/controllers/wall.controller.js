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
  deleteDoc,
  doc,
} from '../firebase-init.js';

// funcion observador
export const watcher = () => {
  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user === null || user === undefined) {
      window.location.hash = '#/';
    } else {
      window.location.hash = '#/wall';
    }
  });
};

// funcion para conseguir info user
export const currentUser = () => {
  watcher();
  const auth = getAuth();
  const user = auth.currentUser;
  if (user === null || user === undefined) {
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

// Función para eliminar publicación
export const deletePublication = (id) => {
  deleteDoc(doc(db, 'publications', id));
};
