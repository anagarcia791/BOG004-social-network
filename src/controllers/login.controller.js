// eslint-disable-next-line import/no-unresolved
import { getAuth, signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.6.8/firebase-auth.js';
import { showNotification } from './alerts.controllers.js';

export const loginBtnEvent = (loginEmail, loginPassword) => {
  const auth = getAuth();
  const email = loginEmail;
  const password = loginPassword;
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
    // Signed in
      const user = userCredential.user;
      console.log(user);
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
