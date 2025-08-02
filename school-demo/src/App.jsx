import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import { SchoolProvider } from './context/SchoolContext';
import LandingPage from './pages/LandingPage';

export default function App() {
  return (
    <SchoolProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/admin" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </SchoolProvider>
  );
}
