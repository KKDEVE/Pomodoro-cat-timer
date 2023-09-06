// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, serverTimestamp } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB2LVXXzt0uMOvmlMimAKUP1vV3tw34utg",
    authDomain: "cat-timer-dac2c.firebaseapp.com",
    projectId: "cat-timer-dac2c",
    storageBucket: "cat-timer-dac2c.appspot.com",
    messagingSenderId: "190718316309",
    appId: "1:190718316309:web:8a41d0614af7b452db231c",
    measurementId: "G-E00PKBWSM0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore();
const timestamp = serverTimestamp();

export { app, db, timestamp };
