// Import the functions you need from the SDKs you needimport { initializeApp } from "firebase/app";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/app";
// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyArFmPvLC4Y-i2-PJpiKwxpE3b21ttLr_w",
  authDomain: "wabros-6f455.firebaseapp.com",
  projectId: "wabros-6f455",
  storageBucket: "wabros-6f455.appspot.com",
  messagingSenderId: "624702371899",
  appId: "1:624702371899:web:e26c88507a85b7556c441e",
  measurementId: "G-SYVMLF9W4V",
};
// Initialize Firebaseconst app = initializeApp(firebaseConfig);
const fire = firebase.initializeApp(firebaseConfig);
export default fire;
