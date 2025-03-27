//import logo from './logo.svg';
import './App.css';

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Work from './components/Work';
import About from './components/About';
import Contact from './components/Contact';


function App() {

  return (

    <div>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<Work/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;
