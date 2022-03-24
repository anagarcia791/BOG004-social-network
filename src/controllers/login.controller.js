// se importan funciones de firebase y de notificacion
import { getAuth, signInWithEmailAndPassword } from '../firebase-init.js';

// funcion para iniciar sesion con correo y contraseña
export const loginBtnEvent = (loginEmail, loginPassword) => {
  window.sessionStorage.getItem('islogged');
  const auth = getAuth();
  const email = loginEmail;
  const password = loginPassword;
  return signInWithEmailAndPassword(auth, email, password);
};
