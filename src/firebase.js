// Import the functions you need from the SDKs you need

//import { getAnalytics } from "firebase/analytics";
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider  } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { Firestore } from "firebase/firestore";
import { getStorage} from "firebase/storage";
import { signInWithPopup } from 'firebase/auth';

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD04G6iD8kPz2yYNN2dziienyj8tmJCTR4",
  authDomain: "disneyplus-clone-c395c.firebaseapp.com",
  projectId: "disneyplus-clone-c395c",
  storageBucket: "disneyplus-clone-c395c.appspot.com",
  messagingSenderId: "242733959062",
  appId: "1:242733959062:web:7a7781e8e51b3a152bbfb7",
  measurementId: "G-1Z9ERQNFC3"
};


// Initialize Firebase

//const analytics = getAnalytics(app);
const firebaseApp =initializeApp(firebaseConfig);
  const db = getFirestore( firebaseApp );
  const auth =getAuth(firebaseApp);
  const provider = new GoogleAuthProvider();
  const storage = getStorage(firebaseApp);
  
  export { auth, provider,storage};
  export default db;