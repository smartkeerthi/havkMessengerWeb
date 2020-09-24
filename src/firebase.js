import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
    authDomain: "havk-message-app.firebaseapp.com",
    databaseURL: "https://xxxxxxxxxxxxxxxxx.com",
    projectId: "xxxxxxxxxxx",
    storageBucket: "xxxxxxxxx.appspot.com",
    messagingSenderId: "xxxxxxxxx",
    appId: "xxxxxxxxxxxxxxxxxxxxxxxxxx,
    measurementId: "xxxxxxxxxxx"
  });

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth};