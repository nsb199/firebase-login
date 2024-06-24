// src/firebase/config.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAL6IG4PlhRmWyWvq0Xbt9XZ6lsDd59ZWM",
    authDomain: "authentication-project-f3034.firebaseapp.com",
    projectId: "authentication-project-f3034",
    storageBucket: "authentication-project-f3034.appspot.com",
    messagingSenderId: "880945161201",
    appId: "1:880945161201:web:d84637016e7fb7d5e01a50"
  };
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
