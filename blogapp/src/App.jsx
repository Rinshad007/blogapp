import React from 'react';
import Home from './components/Home';
import Addblog from './components/Addblog';
import Navbar from './components/Navbar';
import './App.css'
import { Route, Routes } from 'react-router-dom';

function App() {
  

  return (
    <>
      <Navbar />
      <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/addblog" element={<Addblog />}/>
      </Routes>
    </>
  );
}

export default App
