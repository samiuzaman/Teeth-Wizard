// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCvq3PRAYSufaO5cO9VqYT4AF4v_2NeDsc",
  authDomain: "simple-firebase-7e265.firebaseapp.com",
  projectId: "simple-firebase-7e265",
  storageBucket: "simple-firebase-7e265.firebasestorage.app",
  messagingSenderId: "545343838415",
  appId: "1:545343838415:web:85d9cfa78852fad1687fba",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
