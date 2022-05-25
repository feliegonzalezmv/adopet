// Import the functions you need from the SDKs you need
import * as firebase from 'firebase';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyA0Rg4pFwiB5npM9AqGsCyNyVOevzWg-9M',
  authDomain: 'adopets-a1d17.firebaseapp.com',
  projectId: 'adopets-a1d17',
  storageBucket: 'adopets-a1d17.appspot.com',
  messagingSenderId: '213327964569',
  appId: '1:213327964569:web:c8914e8e36b010289f4b08',
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const auth = firebase.auth();

export {auth, app};
