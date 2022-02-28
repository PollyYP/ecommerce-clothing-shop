import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDzFWxaQ--YVVFz38BapcMIjezq62CYb8g",
  authDomain: "ecommerce-clothing-shop-db.firebaseapp.com",
  projectId: "ecommerce-clothing-shop-db",
  storageBucket: "ecommerce-clothing-shop-db.appspot.com",
  messagingSenderId: "13610675220",
  appId: "1:13610675220:web:88c6c1da4cec02e655cb01",
  measurementId: "G-8F5RQMN3NB",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export const auth = getAuth(firebaseApp);
export const firestore = getFirestore();

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ promt: "select_account" });
export const signInWithGoogle = () => signInWithPopup(auth, provider);
export const signout = () => signOut(auth);
