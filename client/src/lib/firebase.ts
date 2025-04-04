// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAt9NBNZssXZgQcGPZEgLhm3f49BXIOdPA",
  authDomain: "cms-me.firebaseapp.com",
  databaseURL: "https://cms-me-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "cms-me",
  storageBucket: "cms-me.firebasestorage.app",
  messagingSenderId: "104688664939",
  appId: "1:104688664939:web:33c79459333f1d0d650c2e",
  measurementId: "G-XBSZJR4QRB"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();
