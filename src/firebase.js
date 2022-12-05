// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDG50N5po9mhMhtZkqqfjzUCReV1tDDu4Q",
  authDomain: "personal-portfolio-b464e.firebaseapp.com",
  projectId: "personal-portfolio-b464e",
  storageBucket: "personal-portfolio-b464e.appspot.com",
  messagingSenderId: "340776545618",
  appId: "1:340776545618:web:2296b46bf2941b8d465e8b",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const dataBase = getFirestore();
