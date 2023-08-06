// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCfzEDD5qeXKXAcNs28Cn43XlHSssRlwbY",
  authDomain: "chat-7e23a.firebaseapp.com",
  projectId: "chat-7e23a",
  storageBucket: "chat-7e23a.appspot.com",
  messagingSenderId: "454168565815",
  appId: "1:454168565815:web:cf6f7abc7534efbc7687b2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
