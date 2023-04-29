import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB_jXx9IVKLuxoGl1LE4p_rZZGziDFQxSM",
  authDomain: "crwn-cloting-db-19261.firebaseapp.com",
  projectId: "crwn-cloting-db-19261",
  storageBucket: "crwn-cloting-db-19261.appspot.com",
  messagingSenderId: "435140098761",
  appId: "1:435140098761:web:ee43df8c21befb937ceb18",
  measurementId: "G-WSZL2WF45W",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGoolePopup = () => signInWithPopup(auth, googleProvider);
export const signInWithGooleRedirect =() => signInWithRedirect(auth, googleProvider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);

  console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot);
  console.log(userSnapshot.exists());

  //is user data does not exist
  //create / set the document with the data

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createAt,
      });
    } catch (error) {
      console.log("error crating the user", error.message);
    }
  }

  //if user data exists
  //return userDocRef
  return userDocRef;

};
