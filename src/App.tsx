import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Cards, Home } from './pages';
import Oleg from './pages/Oleg';
// import { Stack } from '@mui/material';
// import { Link } from "react-router-dom";
// import Button from "@mui/material/Button";

function App() {

  return (
    <BrowserRouter>
      {/* <Link to="settings">
        <Stack spacing={2} direction="row">
          <Button variant="contained">Мій улюблений учень</Button>
        </Stack>
      </Link> */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cards" element={<Cards />} />
        <Route path="/oleg" element={<Oleg />} />
      </Routes>
    </BrowserRouter>
      
  );
}


export default App;
