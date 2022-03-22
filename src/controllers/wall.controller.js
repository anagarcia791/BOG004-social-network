// se importan funciones de firebase y de notificacion
import { getAuth, signOut } from '../firebase-init.js';

// funcion para estado de usuario
export const googlePhoto = () => {
  const auth = getAuth();
  const user = auth.currentUser;
  return user.photoURL;
};

export const stateChangeViewer = () => {
  const auth = getAuth();
  const signOutEvent = signOut(auth);
  const user = auth.currentUser;
  console.log(user, 'hola estoy tratando de desloguearme');
  return signOutEvent;
};
