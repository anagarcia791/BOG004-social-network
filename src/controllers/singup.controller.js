// se importa funciones de firebase para autenticacion y creacion de usuarios
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
// eslint-disable-next-line import/no-unresolved
} from 'https://www.gstatic.com/firebasejs/9.6.8/firebase-auth.js';

// agregamos evento click a boton continuar para crear usuario con correo y contraseña
// con el evento click y la creacion de usuario nos lleva al home
export function singupBtnEvent(singupEmail, singupPassword) {
  const auth = getAuth();
  const email = singupEmail;
  const password = singupPassword;
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log(user);
      // ...
      window.location.hash = '#/wall'; // se cambia ventana cuando crea cuenta
    })
    .catch((error) => {
      const errorCode = error.code;
      console.log(errorCode);
      const errorMessage = error.message;
      console.log(errorMessage);
    // ..
    });
}

// se declara como nuestro proveedor a google
const provider = new GoogleAuthProvider();
export function singupGoogleEvent() {
  const auth = getAuth();
  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      console.log(credential);
      // const token = credential.accessToken;
      // The signed-in user info.
      // const user = result.user;
      // ...
      window.location.hash = '#/wall'; // se cambia ventana cuando autentica cuenta
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      console.log(errorCode);
      const errorMessage = error.message;
      console.log(errorMessage);
      // The email of the user's account used.
      const email = error.email;
      console.log(email);
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      console.log(credential);
    // ...
    });
}
