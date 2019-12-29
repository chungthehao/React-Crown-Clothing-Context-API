import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyCbYdTPrEHVnkJYDxvkftsuT0CQ0gkHjXs',
  authDomain: 'crwn-db-7c56e.firebaseapp.com',
  databaseURL: 'https://crwn-db-7c56e.firebaseio.com',
  projectId: 'crwn-db-7c56e',
  storageBucket: 'crwn-db-7c56e.appspot.com',
  messagingSenderId: '387698918281',
  appId: '1:387698918281:web:ed36c974b4c45c77661758',
  measurementId: 'G-EE4EYJBWQJ'
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
