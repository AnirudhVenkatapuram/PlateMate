// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from 'firebase/auth' 

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCo1qRY9R-7kVlImQ5I8tzsyU6D3cIxhv8",
  authDomain: "platemate-75975.firebaseapp.com",
  projectId: "platemate-75975",
  storageBucket: "platemate-75975.appspot.com",
  messagingSenderId: "1029741025732",
  appId: "1:1029741025732:web:fc799297ad4a132c47ec91"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);