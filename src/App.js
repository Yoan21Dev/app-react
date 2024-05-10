import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Pao from './components/pao';
import Muyayos from './components/muyayos'
import LandingPageView from './pages/LandingPageView'
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"element={<LandingPageView/>} />
        <Route path="/Paola" element={<Pao/>} />
        <Route path="/Muyayos" element={<Muyayos/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;