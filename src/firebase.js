// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyBlc_6RCfwJugbuJqvb3cg3t7-G_6BK7Lg",
  authDomain: "fir-auth-1408.firebaseapp.com",
  projectId: "fir-auth-1408",
  storageBucket: "fir-auth-1408.appspot.com",
  messagingSenderId: "552221288434",
  appId: "1:552221288434:web:9bdd5a53b1890100ea6d6b",
  measurementId: "G-8R597X2VBF"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth();
export {app,auth};