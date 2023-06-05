import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import SignIn from '../Pages/SignIn';
import Dashboard from '../Pages/Dashboard';

import SignUp from '../Pages/SignUp';



function App() {

  return (
    <Router>
      <Routes>
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/signUp" element ={<SignUp/>}/>
        <Route path="*" element={<Navigate to="/signIn" />} />
      </Routes>
    </Router>
    
  );
}

export default App;
