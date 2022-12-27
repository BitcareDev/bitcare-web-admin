import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import firebase from "firebase/compat/app";
import { getFirestore } from "firebase/firestore";

// Use your config values here.
// Initialize Firebase and Firestore
const app = firebase.initializeApp({
  apiKey: "AIzaSyBG4JnVt9HIIirTu-4RTOtUT1sGtTrEKgY",
  authDomain: "bitcare-auth.firebaseapp.com",
  databaseURL: "https://bitcare-auth-default-rtdb.firebaseio.com",
  projectId: "bitcare-auth",
  storageBucket: "bitcare-auth.appspot.com",
  messagingSenderId: "957385368559",
  appId: "1:957385368559:web:383bb407e769c0a8d1cc1a",
  measurementId: "G-19JWT89DED",
});

const db = getFirestore(app);
export { db };
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <App />
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
