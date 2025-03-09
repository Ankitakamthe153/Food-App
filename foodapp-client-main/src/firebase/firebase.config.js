// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAbv7ImljZ9U2owd0b3EREegXUKUmJ1Kbg",
  authDomain: "foodapp-1e3cb.firebaseapp.com",
  projectId: "foodapp-1e3cb",
  storageBucket: "foodapp-1e3cb.firebasestorage.app",
  messagingSenderId: "784251961972",
  appId: "1:784251961972:web:56ad3d48b92d8195490721",
  measurementId: "G-5PGDC3E4EP"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
