// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "blogapp-402113.firebaseapp.com",
  projectId: "blogapp-402113",
  storageBucket: "blogapp-402113.appspot.com",
  messagingSenderId: "408646973919",
  appId: "1:408646973919:web:8083151157a4f5e6bd2c6a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);