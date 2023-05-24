import { GoogleAuthProvider } from "firebase/auth";

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";



const firebaseConfig = {
  apiKey: "AIzaSyBB6B33ArobP80b7ii_NdnDTijsOcfuf9s",
  authDomain: "pfe-sou.firebaseapp.com",
  projectId: "pfe-sou",
  storageBucket: "pfe-sou.appspot.com",
  messagingSenderId: "1077574182969",
  appId: "1:1077574182969:web:dfd3f17a1f84d490dfc5e8",
  measurementId: "G-KY62FE06YK"
};

export const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
 export const auth = getAuth(app);