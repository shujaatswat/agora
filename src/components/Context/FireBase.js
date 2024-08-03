// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA5DLf3xpkAG_Czc4igJdeQO3d7Dy4w1Q4",
  authDomain: "agora-store-app.firebaseapp.com",
  projectId: "agora-store-app",
  storageBucket: "agora-store-app.appspot.com",
  messagingSenderId: "1065546618097",
  appId: "1:1065546618097:web:d088ee4587636df2a7c550",
  measurementId: "G-7HC04KY0N7",
};

// Initialize Firebase
const fireBaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(fireBaseApp);
