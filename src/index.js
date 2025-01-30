import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import FIREBASE_CONFIG from './firebase_config.js';
import { initializeApp } from "firebase/app";
import { getAuth, signInAnonymously } from "firebase/auth";

initializeApp(FIREBASE_CONFIG);
const auth = getAuth();
signInAnonymously(auth).then(() => {
  console.log("Signed in anonymously");
})
.catch((error) => {
  const errorMessage = error.message;
  console.log("Error signing in anonymously: " + errorMessage);
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
