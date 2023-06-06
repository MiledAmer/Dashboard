
import { initializeApp } from "firebase/app";
import { ref, getDatabase, get, child, push, update, set } from "firebase/database";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

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


export function CreateAccount(email, password) {
  const auth = getAuth();

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
}

// export function  writeNewPost(FirstName,LastName,Email,Role) {
//   const db = getDatabase();
//   const postData = {
//     FirstName:FirstName,
//     LastName:LastName,
//     Email:Email,
//     Role:Role,
//    };
//     const newPostKey = push(child(ref(db), 'posts')).key;
//  // Write the new post's data simultaneously in the posts list and the user's post list.
//  const updates = {};
//  updates['/posts/' + newPostKey] = postData;
//  updates['/user-posts/' + FirstNme + '/' + Role] = postData;

//  return update(ref(db), updates);
// }


export function writeUserData(uid,FirstName,LastName,Email,Role) {
  const db = getDatabase();
  set(ref(db, 'Users/' + uid), {
    FirstName:FirstName,
    LastName:LastName,
    Email:Email,
    Role:Role,
  });
}
    