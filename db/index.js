// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBLvvfRnJhyfa3hMsNwzqtrJ0roqsimN-0",
  authDomain: "sametkeles-me.firebaseapp.com",
  projectId: "sametkeles-me",
  storageBucket: "sametkeles-me.appspot.com",
  messagingSenderId: "297950978189",
  appId: "1:297950978189:web:d9ca3fcc1791cbd69fc2c4",
  measurementId: "G-XYDV6Y0JGE",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
