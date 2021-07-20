import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

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

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const SignInWithGoogle = () => auth.signInWithPopup(provider);

export const createUserProfile = async (userAuth, additionalData) => {
    if (!userAuth) return
    const userRef = firestore.doc(`users/${userAuth.uid}`)
    const snapshot = await userRef.get()

    if (!snapshot.exists) {
        const {displayName, email} = userAuth
        const created_At = new Date()

        try {
            await userRef.set({
                displayName,
                email,
                created_At,
                ...additionalData
            })
        } catch (error) {
            console.log('Error occured creating that user', error.message)
        }
    }

    return userRef
}

export default firebase;
