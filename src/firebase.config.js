// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCsTJDn9S1te1xVVGjIvIc5x00vG9qly_Y",
  authDomain: "auth-dragon-news.firebaseapp.com",
  projectId: "auth-dragon-news",
  storageBucket: "auth-dragon-news.appspot.com",
  messagingSenderId: "411008321490",
  appId: "1:411008321490:web:f441edd567fa541317ea0b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth=getAuth(app)
export default (auth)
