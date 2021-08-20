import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import { batch } from "react-redux";

const config = {
  apiKey: "AIzaSyAaBYisL9GQ9OUxZ7dxKOx4TSsu0-1tiI8",
  authDomain: "clothing-app-2bc0e.firebaseapp.com",
  databaseURL: "https://clothing-app-2bc0e-default-rtdb.firebaseio.com",
  projectId: "clothing-app-2bc0e",
  storageBucket: "clothing-app-2bc0e.appspot.com",
  messagingSenderId: "381312861316",
  appId: "1:381312861316:web:f91f88c1ac02d7adff6ed1",
  measurementId: "G-4P1S8DPX22",
};

firebase.initializeApp(config);

export const convertCollectionsSnapshotToMap = (collections) => {
  const transformedCollections = collections.docs.map((doc) => {
    const { title, items } = doc.data();
    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items,
    };
  });

  const returnedTransformation = transformedCollections.reduce((acc, cur) => {
    acc[cur.title.toLowerCase()] = cur;
    return acc;
  }, {});

  return returnedTransformation;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      unsubscribe();
      resolve(userAuth);
    }, reject);
  });
};

export const SignInWithGoogle = () => auth.signInWithPopup(googleProvider);

export const createUserProfile = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const created_At = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        created_At,
        ...additionalData,
      });
    } catch (error) {
      console.log("Error occured creating that user", error.message);
    }
  }

  return userRef;
};

export const addNewCollectionAndDocuments = async (collectionKey, items) => {
  const collectionRef = await firestore.collection(collectionKey);
  const batch = firestore.batch();

  items.forEach((item) => {
    const objectRef = collectionRef.doc();
    batch.set(objectRef, item);
  });

  return await batch.commit();
};

export default firebase;
