// se importan funciones de firebase y de notificacion
import { getAuth, signInWithEmailAndPassword } from '../firebase-init.js';
import { showNotification } from './alerts.controllers.js';
// import { changeView } from '../router.js';

// funcion para iniciar sesion con correo y contraseña
export const loginBtnEvent = (loginEmail, loginPassword) => {
  const auth = getAuth();
  const email = loginEmail;
  const password = loginPassword;
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
    // Signed in
      const user = userCredential.user;
      console.log(user);
      // changeView('#/wall');
      window.location.hash = '#/wall'; // se cambia ventana cuando el usuario se loguea con su  cuenta
    // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      console.log(errorCode);
      const errorMessage = error.message;
      showNotification(errorMessage);
    });
};
