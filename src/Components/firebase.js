import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseApp = {
    apiKey: "AIzaSyC2wrbiaDHNkWQMjf3-uLdxsVsZedPa4GQ",
    authDomain: "clone-e8570.firebaseapp.com",
    databaseURL: "https://clone-e8570.firebaseio.com",
    projectId: "clone-e8570",
    storageBucket: "clone-e8570.appspot.com",
    messagingSenderId: "393632701226",
    appId: "1:393632701226:web:e3bb91ed63d4d70c4f5c53",
    measurementId: "G-RP5EWW8VGE"
  };

firebase.initializeApp(firebaseApp);

const db = firebaseApp.firestore;
const auth = firebase.auth()

export { db, auth }