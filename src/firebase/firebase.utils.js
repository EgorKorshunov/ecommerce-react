import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyBGVMUNjusM-vAV6ZpEYHcN6eE0eBakzvs",
    authDomain: "crwn-db-d931f.firebaseapp.com",
    projectId: "crwn-db-d931f",
    storageBucket: "crwn-db-d931f.appspot.com",
    messagingSenderId: "188503683021",
    appId: "1:188503683021:web:76b867e38bea71c8025e84",
    measurementId: "G-WY0ZTWCFN6"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;
