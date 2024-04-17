// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    
  apiKey: "AIzaSyCcIXuf8IEasxTeWmeY_sxUZNYQ7q5sK3o",
  authDomain: "segundo-parcial-web.firebaseapp.com",
  projectId: "segundo-parcial-web",
  storageBucket: "segundo-parcial-web.appspot.com",
  messagingSenderId: "1062198941868",
  appId: "1:1062198941868:web:e149f80947e3e3924aa709"

};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
export default appFirebase;