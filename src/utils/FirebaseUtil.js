// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

export function firebaseConfig() {
  const config = {
    apiKey: 'AIzaSyB1niRc-SzkBCZLO50NLqXcVeO6VEXmNsM',
    authDomain: 'cms-breaky.firebaseapp.com',
    projectId: 'cms-breaky',
    storageBucket: 'cms-breaky.appspot.com',
    messagingSenderId: '837573590496',
    appId: '1:837573590496:web:2975f1685164bce6767f85',
    measurementId: 'G-ZY060PSYP9'
  };

  // Initialize Firebase
  const app = initializeApp(config);
  const analytics = getAnalytics(app);
}

export function firesabeRegistrarUsuario(email, password) {
  createUserWithEmailAndPassword(getAuth(), email, password).then(
    (credenciales) => {
      // credenciales.user.
    }
  );
}

export async function firebaseIniciarSesion(email, password) {
  try {
    let credenciales = await signInWithEmailAndPassword(
      getAuth(),
      email,
      password
    );
  } catch (e) {
    return false;
  }
  return true;
}
