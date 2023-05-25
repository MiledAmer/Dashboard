import { GoogleAuthProvider } from "firebase/auth";

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";



const firebaseConfig = {
  apiKey: "AIzaSyCZ5fKvtsUAPeMvYa4qCa5jx6uRRrDAdaI",
  authDomain: "pfe-ys.firebaseapp.com",
  projectId: "pfe-ys",
  storageBucket: "pfe-ys.appspot.com",
  messagingSenderId: "846688245132",
  appId: "1:846688245132:web:b8282522c04b386629b2a9",
  measurementId: "G-QK128GZG9R"
};

export const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
 export const auth = getAuth(app);