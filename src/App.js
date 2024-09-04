import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/Home';
import Crud from './components/Crud';
import UserAccount from './components/UserAccount';

function App() {
  const role = 'admin';  // Change this to 'admin' to test admin access

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {role === 'admin' && (
          <>
            <Route path="/crud" element={<Crud />} />
          </>
        )}
        <Route path="/useraccount" element={<UserAccount />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
