import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AcademicsPage from './pages/AcademicsPage';
import AdmissionsPage from './pages/AdmissionsPage';
import FacilitiesPage from './pages/FacilitiesPage';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/academics" element={<AcademicsPage />} />
        <Route path="/admissions" element={<AdmissionsPage />} />
        <Route path="/facilities" element={<FacilitiesPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
