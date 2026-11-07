import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Admin from './pages/Admin';
import './styles/App.css';

function PublicSite() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

function AppContent() {
  const location = useLocation();
  const path = location.pathname.replace(/\/+$/, '') || '/';
  return path.toLowerCase() === '/admin' ? <Admin /> : <PublicSite />;
}

function App() {
  return <Router><AppContent /></Router>;
}

export default App;