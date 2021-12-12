// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyArScsVtqRJTUSTxnO1vJIJnulVk_kHkoc",
  authDomain: "baroudeurs-10f2b.firebaseapp.com",
  projectId: "baroudeurs-10f2b",
  storageBucket: "baroudeurs-10f2b.appspot.com",
  messagingSenderId: "625562995491",
  appId: "1:625562995491:web:3769369d7b7dace2279a96",
  measurementId: "G-XGW1FD2N64"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);