import { initializeApp } from "firebase/app";
import {
  ref,
  getDatabase,
  get,
  child,
  set,
} from "firebase/database";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useQuery } from "@tanstack/react-query";

const firebaseConfig = {
  apiKey: "AIzaSyCZ5fKvtsUAPeMvYa4qCa5jx6uRRrDAdaI",
  authDomain: "pfe-ys.firebaseapp.com",
  databaseURL: "https://pfe-ys-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "pfe-ys",
  storageBucket: "pfe-ys.appspot.com",
  messagingSenderId: "846688245132",
  appId: "1:846688245132:web:b8282522c04b386629b2a9",
  measurementId: "G-QK128GZG9R",
};
export default firebaseConfig;

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export function fetchData(path) {
  const dbRef = ref(getDatabase());
  return get(child(dbRef, path))
    .then((snapshot) => {
      if (snapshot.exists()) {
        return snapshot.val();
      } else {
        return null
      }
    })
    .catch((error) => {
      console.error(error);
    });
}


export function createAccount(email, password, firstName, lastName, role) {
  const formatedEmail = email.replace(/\./g, "").replace("@", "");
  const db = getDatabase();
  return fetchData(`Users/${formatedEmail}`).then((data) => {
    if (data === null) {
      return createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          const userData = {
            FirstName: firstName,
            LastName: lastName,
            Role: role,
            email: email,
          };
          return set(ref(db, `Users/${formatedEmail}`), userData)
            .then(() => {
              console.log("User account created successfully");
              console.log(user);
              return [user, true];
            })
            .catch((error) => {
              console.error("Error writing user data:", error);
              throw [error, false];
            });
        })
        .catch((error) => {
          console.error("Error creating user account:", error);
          throw error;
        });
    } else {
      console.log("Existing email");
      return ["Existing email",false];
    }
  });
}



