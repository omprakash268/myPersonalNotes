// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCbkWeglQJDcUqaJAXB7uTxA0fLV_0GNdA",
  authDomain: "my-notes-app-32cad.firebaseapp.com",
  projectId: "my-notes-app-32cad",
  storageBucket: "my-notes-app-32cad.appspot.com",
  messagingSenderId: "166947474457",
  appId: "1:166947474457:web:e624c3b05048ab9e93ae88",
  measurementId: "G-XDQ3GG6WPS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
