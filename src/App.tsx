import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, Settings } from './pages';
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
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </BrowserRouter>
      
  );
}


export default App;
