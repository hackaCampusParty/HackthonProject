import firebase from 'firebase';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyC50dxfISeKFqnMkHeMeITLXR7GF9Cc3lw',
  authDomain: 'hackcampuparty.firebaseapp.com',
  databaseURL: 'https://hackcampuparty.firebaseio.com',
  projectId: 'hackcampuparty',
  storageBucket: 'hackcampuparty.appspot.com',
  messagingSenderId: '1096650887838',
  appId: '1:1096650887838:web:8f8d5e02e26d8d5d33e18f',
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
