// se importan funciones de firebase y de notificacion
import { getAuth, onAuthStateChanged } from '../firebase-init.js';

// funcion para estado de usuario
export const CAMBIAR = () => {
  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      const uid = user.uid;
      console.log(uid);
      // ...
    } else {
      // User is signed out
      // ...
    }
  });
};
