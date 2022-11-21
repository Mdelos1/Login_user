// Import the functions you need from the SDKs you need
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCxQFtaeeOwinJV86YxS7uNoexYdh-au1w",
  authDomain: "foodadeliveryapp.firebaseapp.com",
  projectId: "foodadeliveryapp",
  storageBucket: "foodadeliveryapp.appspot.com",
  messagingSenderId: "868801719592",
  appId: "1:868801719592:web:94f6ee7b96123b9ba7341d",
  measurementId: "G-068YS0NPMP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const dataBase = getFirestore(app);
export const google = new GoogleAuthProvider();
// const analytics = getAnalytics(app);
