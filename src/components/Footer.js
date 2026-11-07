import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-main">
        <div><Link to="/" className="footer-brand">GLOW BY ESHA<span>MAKEUP ARTISTRY</span></Link><p>Thoughtful beauty. Personal expression.<br />A portfolio of makeup artistry.</p></div>
        <div className="footer-nav"><span className="eyebrow">EXPLORE</span><Link to="/portfolio">Portfolio</Link><Link to="/about">About Esha</Link><Link to="/services">Services</Link><Link to="/contact">Contact</Link></div>
        <div className="footer-note"><span className="eyebrow">A NOTE</span><p>Every face is different.<br />Every look should be, too.</p></div>
      </div>
      <div className="footer-bottom"><span>© {new Date().getFullYear()} Glow By Esha</span><span>Made with care · India</span></div>
    </footer>
  );
}

export default Footer;
