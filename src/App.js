import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import LandingPageView from './pages/LandingPageView'
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"element={<LandingPageView/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;