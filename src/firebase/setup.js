// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth"
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDdYcvXKILKI343S28MbjUXh910QjGyGpU",
  authDomain: "bbc-clone-a9e39.firebaseapp.com",
  projectId: "bbc-clone-a9e39",
  storageBucket: "bbc-clone-a9e39.appspot.com",
  messagingSenderId: "95637612745",
  appId: "1:95637612745:web:d470cc4012c2c1bb84c518"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
export const googleProvider= new GoogleAuthProvider(app)
export const database=getFirestore(app)