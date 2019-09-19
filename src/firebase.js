import { firebaseConfig } from "./firebase-config";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
// Your web app's Firebase configuration

firebase.initializeApp(firebaseConfig);
// database
export const firestore = firebase.firestore();
// authorization
export const auth = firebase.auth();
export const provider = new firebase.auth.GoogleAuthProvider();
export const signInWithGoogle = async () => {
  auth.signInWithPopup(provider);
  // const user = await auth.signInWithPopup(provider);
  // console.log(user);
};
export const signOut = () => auth.signOut();
// Initialize Firebase
export default firebase;
