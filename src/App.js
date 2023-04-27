import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './pages/Home/home';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import ReactionTimeTest from './pages/ReactionTimeTest/reactionTimeTest';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reactiontimetest" element={<ReactionTimeTest />} />
      </Routes>
    </div>
  );
}

export default App;
