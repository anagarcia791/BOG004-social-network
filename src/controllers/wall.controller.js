// se importan funciones de firebase y de notificacion
import { getAuth } from '../firebase-init.js';

// funcion para estado de usuario
export const stateChangeViewer = () => {
  const auth = getAuth();
  const user = auth.currentUser;
  let photoURL;
  if (user !== null) {
    // The user object has basic properties such as display name, email, etc.
    // displayName = user.displayName;
    // const email = user.email;
    photoURL = user.photoURL;
    // // The user's ID, unique to the Firebase project. Do NOT use
    // // this value to authenticate with your backend server, if
    // // you have one. Use User.getToken() instead.
    // const uid = user.uid;
  }
  return photoURL;
  // onAuthStateChanged  // onAuthStateChanged(auth, (user) => {
  //   if (user) {
  //     // User is signed in, see docs for a list of available properties
  //     const uid = user.uid;
  //     console.log(uid);
  //     // ...
  //   } else {
  //     // User is signed out
  //     // ...
  //   }
  // });
};
