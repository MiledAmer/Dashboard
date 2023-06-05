import React, { useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/database';

const UserList = () => {
  const [newUser, setNewUser] = useState('');

  const handleAdd = () => {
    // Get a reference to the Firebase Realtime Database
    const database = firebase.database();

    // Generate a unique ID for the new user
    const userId = database.ref().child('users').push().key;

    // Create the user object with the new ID and name
    const newUserObj = { id: userId, name: newUser };

    // Add the user to the 'users' collection in the database
    database.ref(`users/${userId}`).set(newUserObj)
      .then(() => {
        console.log('User added successfully!');
        setNewUser('');
      })
      .catch(error => {
        console.error('Error adding user:', error);
      });
  };

  return (
    <div>
      <h1>User List</h1>
      <input
        type="text"
        value={newUser}
        onChange={(e) => setNewUser(e.target.value)}
      />
      <button onClick={handleAdd}>Add User</button>
    </div>
  );
};

export default UserList;
