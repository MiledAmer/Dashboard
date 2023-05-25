import { GoogleAuthProvider } from "firebase/auth";
import { getDatabase, ref, set , child, get } from "firebase/database";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";



const firebaseConfig = {
  apiKey: "AIzaSyCZ5fKvtsUAPeMvYa4qCa5jx6uRRrDAdaI",
  authDomain: "pfe-ys.firebaseapp.com",
  databaseURL: "https://pfe-ys-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "pfe-ys",
  storageBucket: "pfe-ys.appspot.com",
  messagingSenderId: "846688245132",
  appId: "1:846688245132:web:b8282522c04b386629b2a9",
  measurementId: "G-QK128GZG9R"
};

export const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
 export const auth = getAuth(app);



const dbRef = ref(getDatabase());
 get(child(dbRef, 'Rooms/Room01')).then((snapshot) => {
   if (snapshot.exists()) {
     console.log(snapshot.val());
   } else {
     console.log("No data available");
   }
 }).catch((error) => {
   console.error(error);
 });