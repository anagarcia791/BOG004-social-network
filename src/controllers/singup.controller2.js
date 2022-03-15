// // se importa funciones de firebase para autenticacion y creacion de usuarios
// import {
//   getAuth,
//   createUserWithEmailAndPassword,
//   signInWithPopup,
//   GoogleAuthProvider,
// // eslint-disable-next-line import/no-unresolved
// } from 'https://www.gstatic.com/firebasejs/9.6.8/firebase-auth.js';

// // import * as singupComponent from '../views/singup.js';
// // import singupComponent from '../views/singup.js';

// export function prueba4() {
//   console.log('desde controller sing');
// }

// // agregamos evento click a boton continuar para crear usuario con correo y contraseña
// // con el evento click y la creacion de usuario nos lleva al home
// export function singupBtnEvent() {
//   // const singupBtn = document.querySelector('#singup-btn');
//   // const singupBtn = prueba();
//   singupBtn.addEventListener('click', (event) => {
//     event.preventDefault();
//     const email = document.querySelector('#email').value;
//     const password = document.querySelector('#pass').value;
//     const auth = getAuth();
//     createUserWithEmailAndPassword(auth, email, password)
//       .then((userCredential) => {
//         // Signed in
//         const user = userCredential.user;
//         console.log(user);
//         // ...
//         window.location.hash = '#/home'; // se cambia ventana cuando crea cuenta
//       })
//       .catch((error) => {
//         const errorCode = error.code;
//         console.log(errorCode);
//         const errorMessage = error.message;
//         console.log(errorMessage);
//         // ..
//       });
//   });
// }

// // se declara como nuestro proveedor a google
// const provider = new GoogleAuthProvider();
// // agregamos evento click a imagen para autenticar usuario con google
// export function singupGoogleEvent() {
//   // const authGoogle = document.querySelector('#auth-google');
//   const authGoogle = prueba2();
//   authGoogle.addEventListener('click', (event) => {
//     event.preventDefault();
//     const auth = getAuth();
//     signInWithPopup(auth, provider)
//       .then((result) => {
//         // This gives you a Google Access Token. You can use it to access the Google API.
//         const credential = GoogleAuthProvider.credentialFromResult(result);
//         console.log(credential);
//         // const token = credential.accessToken;
//         // The signed-in user info.
//         // const user = result.user;
//         // ...
//         window.location.hash = '#/home'; // se cambia ventana cuando autentica cuenta
//       }).catch((error) => {
//         // Handle Errors here.
//         const errorCode = error.code;
//         console.log(errorCode);
//         const errorMessage = error.message;
//         console.log(errorMessage);
//         // The email of the user's account used.
//         const email = error.email;
//         console.log(email);
//         // The AuthCredential type that was used.
//         const credential = GoogleAuthProvider.credentialFromError(error);
//         console.log(credential);
//         // ...
//       });
//   });
// }

// // agregamos evento click a boton de login
// export function loginBtnLoad() {
//   // const loginBtn = document.querySelector('#login-btn-load');
//   const loginBtn = prueba3();
//   loginBtn.addEventListener('click', (event) => {
//     event.preventDefault();
//     window.location.hash = '#/'; // se cambia ventana a login para iniciar sesion
//   });
// }
