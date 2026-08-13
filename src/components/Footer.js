import React from 'react';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Glow By Esha</h3>
          <p>Professional Makeup Artist & Beauty Specialist</p>
        </div>
        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="social-links">
            <a href="#instagram">Instagram</a>
            <a href="#facebook">Facebook</a>
            <a href="#twitter">Twitter</a>
          </div>
        </div>
        <div className="footer-section">
          <h4>Quick Links</h4>
          <div className="footer-links">
            <a href="#portfolio">Portfolio</a>
            <a href="#services">Services</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Glow By Esha. All rights reserved. ✨</p>
      </div>
    </footer>
  );
}

export default Footer;
