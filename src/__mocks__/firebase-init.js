// funciones de Firebase
export const initializeApp = () => Promise.resolve({});
export const getAuth = () => Promise.resolve({});
export const signInWithPopup = () => Promise.resolve({});
export class GoogleAuthProvider {}
export const signInWithEmailAndPassword = () => Promise.resolve({});
export const onAuthStateChanged = () => Promise.resolve({});
export const signOut = () => Promise.resolve({});
export const setPersistence = () => Promise.resolve({});

export const createUserWithEmailAndPassword = jest.fn((email, password) => {
  const userCredentials = {
    user: { uid: '123' },
  };
  const error = {
    status: false,
    code: 'auth/email-already-in-use',
  };
  let promiseResult;
  if (email === 'ana1@gmail.com' && password === 'ana12345') {
    promiseResult = Promise.resolve(userCredentials);
  } else {
    promiseResult = Promise.reject(error);
  }
  return promiseResult;
});

// funciones de Firestore
export const getFirestore = () => Promise.resolve({});
export const collection = () => Promise.resolve({});
export const addDoc = () => Promise.resolve({});
export const getDocs = () => Promise.resolve({});
export const onSnapshot = () => Promise.resolve({});
export const deleteDoc = () => Promise.resolve({});
export const doc = () => Promise.resolve({});
