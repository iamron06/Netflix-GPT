// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAI134V-QKnbF_sKGoRyaOkLK0t43lgc44",
  authDomain: "netflix-gpt-rohan.firebaseapp.com",
  projectId: "netflix-gpt-rohan",
  storageBucket: "netflix-gpt-rohan.appspot.com",
  messagingSenderId: "350670652466",
  appId: "1:350670652466:web:8df12351e4fe27e788e82b",
  measurementId: "G-Z11M2RKRH0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();