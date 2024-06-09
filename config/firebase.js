// PlateMate/config/firebase.js

import { initializeApp } from 'firebase/app';
import { getAuth, initializeAuth, getReactNativePersistence } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';

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

// Initialize Firebase Auth with AsyncStorage persistence
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage)
});

const db = getFirestore(app);

export { auth, db };
