import { useState } from 'react'
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import './App.css'


function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            {/* <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} /> */}
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
