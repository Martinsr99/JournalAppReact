// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA96Nw1lHBvebQ2eY6z6u19O9No19S200s",
  authDomain: "react-cursos-2beea.firebaseapp.com",
  projectId: "react-cursos-2beea",
  storageBucket: "react-cursos-2beea.appspot.com",
  messagingSenderId: "427543077506",
  appId: "1:427543077506:web:416073dd23953443ce4a9b"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);