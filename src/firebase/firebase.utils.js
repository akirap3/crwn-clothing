import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDsRsHR-bzudQM-ZmcQQg6DHey7yS58FzA",
  authDomain: "crwn-db-712d6.firebaseapp.com",
  projectId: "crwn-db-712d6",
  storageBucket: "crwn-db-712d6.appspot.com",
  messagingSenderId: "115297060582",
  appId: "1:115297060582:web:7fb7ed21131f3525c89d27",
  measurementId: "G-GKEQ6PL1YV",
};

export const createUserProfileDocument = async (userAuth, ...addtionalData) => {
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
        ...addtionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const SignInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
