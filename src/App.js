import React, { useEffect } from 'react';
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

function FloatingWhatsApp() {
  const message = encodeURIComponent('Hello Glow By Esha! I would like to enquire about a makeup booking.');
  return (
    <a className="floating-whatsapp" href={`https://wa.me/918116399882?text=${message}`} target="_blank" rel="noopener noreferrer" aria-label="Book a makeup service on WhatsApp">
      <span className="floating-whatsapp-icon" aria-hidden="true">◉</span>
      <span>WhatsApp Booking</span>
      <span className="floating-whatsapp-arrow" aria-hidden="true">↗</span>
    </a>
  );
}

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
      <FloatingWhatsApp />
    </div>
  );
}

function AppContent() {
  const location = useLocation();
  useEffect(() => {
    if (location.hash) {
      requestAnimationFrame(() => {
        document.getElementById(location.hash.slice(1))?.scrollIntoView({ block: 'start' });
      });
    } else {
      window.scrollTo(0, 0);
    }
  }, [location.pathname, location.hash]);
  const path = location.pathname.replace(/\/+$/, '') || '/';
  return path.toLowerCase() === '/admin' ? <Admin /> : <PublicSite />;
}

function App() {
  return <Router><AppContent /></Router>;
}

export default App;