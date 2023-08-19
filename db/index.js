import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "process.env.FIREBASE_API_KEY",
  authDomain: "sametkeles-me.firebaseapp.com",
  projectId: "sametkeles-me",
  storageBucket: "sametkeles-me.appspot.com",
  messagingSenderId: "297950978189",
  appId: "1:297950978189:web:d9ca3fcc1791cbd69fc2c4",
  measurementId: "G-XYDV6Y0JGE",
};

const app = initializeApp(firebaseConfig);
let analytics = null; // Initialize this variable

if (process.client) {
  // Initialize Firebase Analytics only on the client side
  analytics = getAnalytics(app);
}

export const db = getFirestore(app);
export { analytics }; // Export analytics if available, otherwise it remains null
