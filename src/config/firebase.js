
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { ref, getDatabase, get, child } from "firebase/database";


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
export default firebaseConfig;

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export function fetchData(path) {
  const dbRef = ref(getDatabase());
  return (get(child(dbRef, path))
    .then((snapshot) => {
      if (snapshot.exists()) {
        return snapshot.val();
      } else {
        console.log("No data available");
      }
    })
    .catch((error) => {
      console.error(error);
    }));
}

