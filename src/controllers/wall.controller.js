// se importan funciones de firebase y de notificacion
import {
  getAuth,
  signOut,
  // setPersistence,
  // browserSessionPersistence,
} from '../firebase-init.js';

// funcion para estado de usuario
export const googlePhoto = () => {
  const auth = getAuth();
  const user = auth.currentUser;
  if (user == null) {
    console.log('no encontro el ususuario', user);
    window.location.hash = '#/';
    return 1;
  }
  return user.photoURL;
};

// export const persistence = () => {
//   const auth = getAuth();
//   return setPersistence(auth, browserSessionPersistence);
// };

export const stateChangeViewer = () => {
  const auth = getAuth();
  const signOutEvent = signOut(auth);
  const user = auth.currentUser;
  console.log(user, 'hola estoy tratando de desloguearme');
  return signOutEvent;
};
