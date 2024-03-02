// eslint-disable-next-line no-unused-vars
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/homepage';
import Login from './pages/login';
import Register from './pages/register';
import Home from './pages/home';
import Discover from './pages/discover';
import Submit from './pages/submit';
import Leaderboard from './pages/leaderboard'
import Upload from './pages/upload';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/discover" element={<Discover />} />
        <Route path="/submit" element={<Submit />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/upload" element={<Upload />} /> 
      </Routes>
    </Router>
  );
}

export default App;