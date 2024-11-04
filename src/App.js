import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '../src/component/Navbar/Navbar'
import HomePage from '../src/component/HomePage/HomePage';
import AboutPage from '../src/component/AboutPage/AboutPage';
import ContactUs from '../src/component/ContactUs/ContactUs'
import 'bootstrap/dist/css/bootstrap.min.css';

// ... other pages

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactUs />} />

      </Routes>
    </Router>
  );
}

export default App;