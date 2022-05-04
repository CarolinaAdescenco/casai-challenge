import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import DogsPage from './pages/dogs';
import CheckoutPage from './pages/checkout';
import AdoptionsPage from './pages/adoptions';

function App() {
  return (
    <Routes>
      <Route path="/" element={<DogsPage />} />
      <Route path="/dogs" element={<DogsPage />} />
      <Route path="/adoptions" element={<AdoptionsPage />} />
      <Route path="/checkout" element={<CheckoutPage />} />
    </Routes>
  );
}

export default App;
