// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import * as firebase from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';  


const firebaseConfig = {
    apiKey: "AIzaSyB8EWf1hhOawYbrjqzWRC2ghaxlBdpQIAM",
    authDomain: "nnetify-ico.firebaseapp.com",
    projectId: "nnetify-ico",
    storageBucket: "nnetify-ico.appspot.com",
    messagingSenderId: "741635422097",
    appId: "1:741635422097:web:1e132cab092b826ff98c30",
    measurementId: "G-BQ9XWGYVN4"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = getFirestore(firebaseApp);
  const auth = getAuth(); 
  const provider = new GoogleAuthProvider();

  export {auth, provider};
  export default db;