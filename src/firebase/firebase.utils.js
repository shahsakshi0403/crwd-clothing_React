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

export const createUsersProfileDocument = async (userAuth , additionalData) => {
  if(!userAuth) return ;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapshot = await userRef.get();

  if(!snapshot.exists){
    const { displayName , email }=userAuth;
    const createdAt = new Date();

    try{
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    }catch(error){
      console.log('Error creating user',error.message);
    }
  }
  return userRef;
}
if (!firebase.apps.length) {
  firebase.initializeApp(config);   // React na video ma khali aaj line hti bt mre error aavti hti so if condition muki che
}
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt : 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;