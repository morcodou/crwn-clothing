import firebase from 'firebase/app';

import 'firebase/auth';
import 'firebase/firestore';

const config = {
  apiKey: 'AIzaSyD3EM1aChDECQ6RQ2rguZPom01CzBydexY',
  authDomain: 'crwn-db-14c71.firebaseapp.com',
  databaseURL: 'https://crwn-db-14c71.firebaseio.com',
  projectId: 'crwn-db-14c71',
  storageBucket: 'crwn-db-14c71.appspot.com',
  messagingSenderId: '843012410450',
  appId: '1:843012410450:web:cb213964e8b9e2e6efa38b',
  measurementId: 'G-74RGLTL8MP'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const singInWithGoogle = () => auth.signInWithPopup(provider);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createAt = new Date();

    try {
      await userRef.set({ displayName, email, createAt, ...additionalData });
    } catch (error) {
      console.log('error creating user ', error.message);
    }
  }

  return userRef;
};

export default firebase;
