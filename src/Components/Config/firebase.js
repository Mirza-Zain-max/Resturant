// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA-kNS6-UOZPXiFw_n3BQWHsoJFl7lX118",
  authDomain: "restaurant9230.firebaseapp.com",
  projectId: "restaurant9230",
  storageBucket: "restaurant9230.appspot.com",
  messagingSenderId: "735559884334",
  appId: "1:735559884334:web:ab4d1d488d5f38519189bf",
  measurementId: "G-7XLFJ0QKDH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const fireStore = getFirestore(app);

export { analytics, auth, fireStore };