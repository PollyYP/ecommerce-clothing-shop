import { initializeApp } from "firebase/app";
import {
  collection,
  doc,
  getDoc,
  setDoc,
  getFirestore,
} from "firebase/firestore";
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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = doc(db, "users", userAuth.uid);
  const snapShot = await getDoc(userRef);

  if (!snapShot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      const usersRef = collection(db, "users");
      await setDoc(doc(usersRef, userAuth.uid), {
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

const firebaseApp = initializeApp(firebaseConfig);

export const auth = getAuth(firebaseApp);
export const db = getFirestore(firebaseApp);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ promt: "select_account" });
export const signInWithGoogle = () => signInWithPopup(auth, provider);
export const signout = () =>
  signOut(auth)
    .then(() => {
      console.log("Sign-out successful");
    })
    .catch((error) => {
      console.log("An error happened", error);
    });
