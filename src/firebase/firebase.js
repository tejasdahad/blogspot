import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyD0HCGpwF3mX4Jlg10c-llFZJ-2E9cekJ0",
    authDomain: "blogspot-7ae59.firebaseapp.com",
    databaseURL: "https://blogspot-7ae59.firebaseio.com",
    projectId: "blogspot-7ae59",
    storageBucket: "blogspot-7ae59.appspot.com",
    messagingSenderId: "678098463686",
    appId: "1:678098463686:web:0d3b1168e820c8f7afe0c7"
  };
  // Initialize Firebase
  firebase.initializeApp(config);
  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

  const database = firebase.database();

  export { firebase, googleAuthProvider ,database as default };