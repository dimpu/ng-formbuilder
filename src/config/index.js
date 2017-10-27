import firebase from 'firebase';


var config = {
    apiKey: "AIzaSyCzNwBEgVB2jLmb8WLgaLx2nS5bp1ZyscM",
    authDomain: "softoolinfo.firebaseapp.com",
    databaseURL: "https://softoolinfo.firebaseio.com",
    projectId: "softoolinfo",
    storageBucket: "softoolinfo.appspot.com",
    messagingSenderId: "931363808812"
  };
  firebase.initializeApp(config);

export default firebase;