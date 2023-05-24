import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue } from "firebase/database";



const firebaseConfig = {
  apiKey: "AIzaSyBB6B33ArobP80b7ii_NdnDTijsOcfuf9s",
  authDomain: "pfe-sou.firebaseapp.com",
  databaseURL: "https://pfe-sou-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "pfe-sou",
  storageBucket: "pfe-sou.appspot.com",
  messagingSenderId: "1077574182969",
  appId: "1:1077574182969:web:dfd3f17a1f84d490dfc5e8",
  measurementId: "G-KY62FE06YK"
};


const app = initializeApp(firebaseConfig);
const db = getDatabase();
const reference = ref (db, 'TheRooms/01');


