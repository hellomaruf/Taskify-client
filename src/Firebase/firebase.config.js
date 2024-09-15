// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCu-6nMtncpObbVQZhZ_jUq3kuE0gtAFf0",
  authDomain: "taskify-3c979.firebaseapp.com",
  projectId: "taskify-3c979",
  storageBucket: "taskify-3c979.appspot.com",
  messagingSenderId: "787737757395",
  appId: "1:787737757395:web:c343c2b7fb691d1a8e7626",
  measurementId: "G-GCCNJVTQYQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);