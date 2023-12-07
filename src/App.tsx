import React from 'react';
import './App.css';
import {BrowserRouter, Routes,  Route} from 'react-router-dom';
import About from './pages/about/about';
import Home from './pages/home/home';
import Contact from './pages/contact/contact';
import NoPage from './pages/noPage/noPage';

function App() {

  return (
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="*" element={<NoPage />} />
            <Route index element={<Home/>} />
            <Route path="/home" element={<Home />} />
            <Route path='/about' element={<About/>} />
            <Route path='/contact' element={<Contact/>} />
          </Routes>
        </BrowserRouter>
      </div>
      
  );
}


export default App;
