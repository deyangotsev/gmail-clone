// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import {GoogleAuthProvider, getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCeWGNFQBv6SujOCvfjjbDWWtDgU4v0X3Y",
  authDomain: "clone-c08e4.firebaseapp.com",
  projectId: "clone-c08e4",
  storageBucket: "clone-c08e4.appspot.com",
  messagingSenderId: "886115536446",
  appId: "1:886115536446:web:3bf24ecc9d772922f54b6f"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore();
const provider = GoogleAuthProvider();
const auth = getAuth();

export {db, provider, auth};
