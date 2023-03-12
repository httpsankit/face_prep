// App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './Login';
import Home from './Home';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (username, password) => {
    if (username === 'foo' && password === 'bar') {
      setIsLoggedIn(true);
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={isLoggedIn ? <Navigate to="/home" /> : <Login onLogin={handleLogin} />} />
        <Route path="/home" element={isLoggedIn ? <Home onLogout={handleLogout} /> : <Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
