// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCvSd3QRS8HA6C5v8PXsZWnE4gTZRycyOo",
  authDomain: "tourists-place.firebaseapp.com",
  projectId: "tourists-place",
  storageBucket: "tourists-place.appspot.com",
  messagingSenderId: "639493090492",
  appId: "1:639493090492:web:7ef698c605c19f115cb4b9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
export default auth;
