import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBG4JnVt9HIIirTu-4RTOtUT1sGtTrEKgY",
    authDomain: "bitcare-auth.firebaseapp.com",
    databaseURL: "https://bitcare-auth-default-rtdb.firebaseio.com",
    projectId: "bitcare-auth",
    storageBucket: "bitcare-auth.appspot.com",
    messagingSenderId: "957385368559",
    appId: "1:957385368559:web:383bb407e769c0a8d1cc1a",
    measurementId: "G-19JWT89DED",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore(app)
