import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Contact.css';

function Contact() {
  return (
    <main className="contact-page">
      <div className="contact-panel">
        <p className="eyebrow">LET'S TALK</p>
        <h1>Your occasion.<br /><em>Your kind of glow.</em></h1>
        <p className="contact-lead">Planning a wedding, celebration or special event? Share the occasion and the look you have in mind with Glow By Esha.</p>
        <div className="contact-detail"><span>01 / ENQUIRIES</span><p>Instagram contact details will be added here after the official profile link is confirmed.</p></div>
        <div className="contact-detail"><span>02 / BEFORE YOU REACH OUT</span><p>It helps to have your event date, location and preferred makeup style ready.</p></div>
        <Link to="/portfolio" className="text-link">Explore the portfolio first ↗</Link>
      </div>
      <aside className="contact-side"><span className="contact-monogram">G.</span><p>GLOW BY ESHA</p><small>MAKEUP ARTISTRY</small></aside>
    </main>
  );
}
export default Contact;
