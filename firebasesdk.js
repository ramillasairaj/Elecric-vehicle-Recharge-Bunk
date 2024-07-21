// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAePrffiqRapKjwl26P6s-FU-farqa7asM",
    authDomain: "electric--vechile.firebaseapp.com",
    projectId: "electric--vechile",
    storageBucket: "electric--vechile.appspot.com",
    messagingSenderId: "604892913985",
    appId: "1:604892913985:web:d7314e4c9a788c7dfa01c0",
    measurementId: "G-GE2G8DC2M1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);