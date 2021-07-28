import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config={
    apiKey: "AIzaSyCz0ya1Nvayevu-GqXBhIuG0lu_HhJaZ0U",
    authDomain: "crwn-clothing-d7791.firebaseapp.com",
    projectId: "crwn-clothing-d7791",
    storageBucket: "crwn-clothing-d7791.appspot.com",
    messagingSenderId: "925455114646",
    appId: "1:925455114646:web:62dad298f3689fd9a27db7",
    measurementId: "G-KTY0KSKGQJ"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt : 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;