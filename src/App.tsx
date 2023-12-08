import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Cards, Home, Nazar } from './pages';
import Oleg from './pages/Oleg';
import Vanya from './pages/Vanya';
import Nastya from './pages/Nastya/index';
import DanyaI from './pages/DanyaI/index';
import DanyaS from './pages/DanyaS/index';
import Erik from './pages/Erik';
import Yura from './pages/Yura/index';
import Edward from './pages/Edward/index';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cards" element={<Cards />} />
        <Route path="/oleg" element={<Oleg />} />
        <Route path="/vanya" element={<Vanya />} />
        <Route path="/nastya" element={<Nastya />} />
        <Route path="/danyai" element={<DanyaI />} />
        <Route path="/danyas" element={<DanyaS />} />
        <Route path="/nazar" element={<Nazar />} />
        <Route path="/erik" element={<Erik />} />
        <Route path="/yura" element={<Yura />} />
        <Route path="/edward" element={<Edward />} />
      </Routes>
    </BrowserRouter>
      
  );
}


export default App;
