import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import SignIn from './SignIn';
import PersistentDrawerLeft from './PersistentDrawerLeft';
import { useQueryClient } from '@tanstack/react-query';


function App() {

  const queryClient = useQueryClient();

  return (
    <Router>
      <Routes>
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/dashboard" element={<PersistentDrawerLeft client = {queryClient}/>} />
        <Route path="*" element={<Navigate to="/signIn" />} />
      </Routes>
    </Router>
    
  );
}

export default App;
