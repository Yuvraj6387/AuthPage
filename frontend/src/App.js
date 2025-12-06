// src/App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Signup from './components/Signup';
import Login from './components/Login';
import Dashboard from './components/Dashboard';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    const email = localStorage.getItem('email');
    if (token && email) {
      setUser({ email, token });
    }
  }, []);

  const handleLogin = (user) => {
    localStorage.setItem('email', user.email);
    setUser(user);
  };

  const handleLogout = () => {
    localStorage.removeItem('email');
    setUser(null);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/signup"
          element={user ? <Navigate to="/dashboard" /> : <Signup onAuthSuccess={() => { window.location = '/login'; }} />}
        />
        <Route
          path="/login"
          element={user ? <Navigate to="/dashboard" /> : <Login onLogin={handleLogin} />}
        />
        <Route
          path="/dashboard"
          element={user ? <Dashboard user={user} onLogout={handleLogout} /> : <Navigate to="/login" />}
        />
        <Route
          path="/"
          element={<Navigate to={user ? "/dashboard" : "/login"} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
