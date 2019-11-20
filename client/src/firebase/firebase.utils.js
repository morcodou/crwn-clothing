import firebase from 'firebase/app';

import 'firebase/auth';
import 'firebase/firestore';
import { reject } from 'q';

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

export const addCollectionAndDocuments = async (collectionKey, items) => {
  const collectionReference = firestore.collection(collectionKey);

  const batch = firestore.batch();
  items.forEach(item => {
    const documentReference = collectionReference.doc();
    batch.set(documentReference, item);
  });

  return await batch.commit();
};

export const convertCollectionsSnapshotToMap = collections => {
  const transformedCollection = collections.docs.map(doc => {
    const { title, items } = doc.data();
    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
    };
  });

  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      unsubscribe();
      resolve(userAuth);
    }, reject);
  });
};

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });
export const singInWithGoogle = () => auth.signInWithPopup(googleProvider);

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
