import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Contact.css';

function Contact() {
  return (
    <main className="contact-page">
      <div className="contact-panel">
        <p className="eyebrow">LET'S TALK</p>
        <h1>Your occasion.<br /><em>Your kind of glow.</em></h1>
        <p className="contact-lead">আপনার বিয়ে, অনুষ্ঠান বা বিশেষ দিনের Makeup Look নিয়ে পরিকল্পনা করছেন? আপনার পছন্দ ও ভাবনার কথা Glow By Esha-র সঙ্গে শেয়ার করুন।</p>
        <div className="contact-detail"><span>01 / ENQUIRIES</span><p>যোগাযোগের জন্য আমাদের Instagram প্রোফাইলের তথ্য শীঘ্রই এখানে যুক্ত করা হবে।</p></div>
        <div className="contact-detail"><span>02 / BEFORE YOU REACH OUT</span><p>যোগাযোগের আগে অনুষ্ঠানের তারিখ, স্থান এবং আপনার পছন্দের Makeup Style জানালে পরিকল্পনা করতে সুবিধা হবে।</p></div>
        <Link to="/portfolio" className="text-link">Explore the portfolio first ↗</Link>
      </div>
      <aside className="contact-side"><span className="contact-monogram">G.</span><p>GLOW BY ESHA</p><small>MAKEUP ARTISTRY</small></aside>
    </main>
  );
}

export default Contact;