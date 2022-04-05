// se importan funciones de firebase y de notificacion
import {
  getAuth,
  signOut,
  onAuthStateChanged,
  collection,
  db,
  addDoc,
  getDocs,
  getDoc,
  onSnapshot,
  deleteDoc,
  doc,
  serverTimestamp,
  orderBy,
  query,
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

// creacion de db
const eventPublications = collection(db, 'publications');

// funcion para crear publicación
export const createPublication = (inputPost, generePost, uidPost, userNamePost, photoUrlPost) => {
  addDoc(eventPublications, {
    inputPost,
    generePost,
    uidPost,
    userNamePost,
    photoUrlPost,
    postCreatedAt: serverTimestamp(),
  });
};

// funcion para leer publicaciones
export const readPublications = () => {
  getDocs(eventPublications);
};

// consulta de publicaciones de manera ordenada
const sortedQuery = query(eventPublications, orderBy('postCreatedAt', 'desc'));

// funcion para leer todas las publicaciones de manera instantanea y actualizada
export const readAllPublications = (querySnapshot) => {
  onSnapshot(sortedQuery, eventPublications, querySnapshot);
};

// funcion para eliminar publicación
export const deletePublication = (id) => {
  deleteDoc(doc(eventPublications, id));
};

// funcion para editar publicación
export const getPublication = (id) => {
  console.log(id, 'soy id para editar desde el wallController');
  const docRef = doc(db, 'publications', id);
  const docSnap = getDoc(docRef);
  return docSnap;
};

// funcion para cerrar sesion
export const signOutUser = () => {
  const auth = getAuth();
  const signOutEvent = signOut(auth);
  return signOutEvent;
};
