// se importan funciones de firebase y de notificacion
import { getAuth, signInWithEmailAndPassword } from '../firebase-init.js';

// funcion para iniciar sesion con correo y contraseña
export const loginBtnEvent = (loginEmail, loginPassword) => {
  const auth = getAuth();
  const email = loginEmail;
  const password = loginPassword;
  return signInWithEmailAndPassword(auth, email, password);
};

// Pendiente de pulir para recargar la pagina
// import {
//   getAuth, signInWithEmailAndPassword, setPersistence, browserSessionPersistence,
// } from '../firebase-init.js';

// // funcion para iniciar sesion con correo y contraseña
// export const loginBtnEvent = (loginEmail, loginPassword) => {
//   const auth = getAuth();
//   setPersistence(auth, browserSessionPersistence);
//   const email = loginEmail;
//   const password = loginPassword;
//   return signInWithEmailAndPassword(auth, email, password);
// };
