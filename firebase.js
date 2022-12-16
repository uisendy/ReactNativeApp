// Import the functions you need from the SDKs you need
import * as firebase from 'firebase';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAVTb-hQJtAmHaReY8xpVNkg27K-oKVD94',
  authDomain: 'fir-auth-841f5.firebaseapp.com',
  projectId: 'fir-auth-841f5',
  storageBucket: 'fir-auth-841f5.appspot.com',
  messagingSenderId: '850529862724',
  appId: '1:850529862724:web:488be7811508fa8bed6811',
};

// Initialize Firebase
let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const auth = firebase.auth();
export {auth};
