import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

function Home() {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Glow By Esha</h1>
          <p className="hero-subtitle">Unleash Your Inner Beauty</p>
          <p className="hero-description">Professional makeup artistry for every occasion</p>
          <Link to="/portfolio" className="hero-btn">View My Work</Link>
        </div>
        <div className="hero-image">
          <div className="hero-placeholder">💄 Makeup Showcase</div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="featured-services">
        <h2>Featured Services</h2>
        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon">💍</div>
            <h3>Bridal Makeup</h3>
            <p>Your special day deserves perfection</p>
          </div>
          <div className="service-card">
            <div className="service-icon">🎉</div>
            <h3>Party Makeup</h3>
            <p>Look stunning for any celebration</p>
          </div>
          <div className="service-card">
            <div className="service-icon">📸</div>
            <h3>Photoshoot Makeup</h3>
            <p>Camera-ready looks that pop</p>
          </div>
          <div className="service-card">
            <div className="service-icon">👄</div>
            <h3>Daily Glam</h3>
            <p>Enhance your natural beauty</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <h2>Ready to Glow?</h2>
        <p>Book your makeup appointment today</p>
        <Link to="/contact" className="cta-btn">Get in Touch</Link>
      </section>
    </div>
  );
}

export default Home;
