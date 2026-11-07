import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Contact.css';

function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', service: 'Bridal Makeup', date: '', location: '', message: '' });
  const [errors, setErrors] = useState({});
  const update = (field, value) => setForm(current => ({ ...current, [field]: value }));
  const submitBooking = event => {
    event.preventDefault();
    const nextErrors = {};
    if (!form.name.trim()) nextErrors.name = 'Please enter your name.';
    if (!/^[+0-9\\s()-]{8,18}$/.test(form.phone.trim())) nextErrors.phone = 'Please enter a valid mobile number.';
    if (!form.date) nextErrors.date = 'Please select your event date.';
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) return;
    const message = [
      'Hello Glow By Esha! I would like to enquire about a makeup booking.',
      '',
      'Name: ' + form.name.trim(),
      'Mobile: ' + form.phone.trim(),
      'Service: ' + form.service,
      'Event date: ' + form.date,
      'Location: ' + (form.location.trim() || 'Not specified'),
      'Details: ' + (form.message.trim() || 'Not specified'),
      '',
      'Please let me know your availability and pricing.'
    ].join('\\n');
    window.open('https://wa.me/918116399882?text=' + encodeURIComponent(message), '_blank', 'noopener,noreferrer');
  };
  return (
    <main className="contact-page">
      <div className="contact-panel">
        <p className="eyebrow">BOOKING ENQUIRY</p>
        <h1>Your occasion.<br /><em>Your kind of glow.</em></h1>
        <p className="contact-lead">আপনার বিশেষ দিনের Makeup Look নিয়ে পরিকল্পনা করছেন? নিচের form-টি পূরণ করুন। আপনার details WhatsApp-এ পাঠানোর জন্য প্রস্তুত হবে। Esha availability ও pricing জানিয়ে দেবেন।</p>
        <form className="booking-form" onSubmit={submitBooking} noValidate>
          <label>Full name<input value={form.name} onChange={e => update('name', e.target.value)} placeholder="Your name" autoComplete="name" />{errors.name && <small className="booking-error">{errors.name}</small>}</label>
          <label>Mobile number<input value={form.phone} onChange={e => update('phone', e.target.value)} placeholder="Your contact number" inputMode="tel" autoComplete="tel" />{errors.phone && <small className="booking-error">{errors.phone}</small>}</label>
          <label>Makeup service<select value={form.service} onChange={e => update('service', e.target.value)}><option>Bridal Makeup</option><option>Party Makeup</option><option>Engagement & Occasion</option><option>Other</option></select></label>
          <label>Event date<input type="date" value={form.date} onChange={e => update('date', e.target.value)} />{errors.date && <small className="booking-error">{errors.date}</small>}</label>
          <label>Event location<input value={form.location} onChange={e => update('location', e.target.value)} placeholder="Area / Town" autoComplete="address-level2" /></label>
          <label>Additional details<textarea value={form.message} onChange={e => update('message', e.target.value)} placeholder="Tell us about your preferred look or event..." rows="3" /></label>
          <button type="submit" className="booking-submit"><span>Continue to WhatsApp</span><span aria-hidden="true">↗</span></button>
          <p className="booking-privacy">Your details will be added to a WhatsApp message. Nothing is sent until you press Send in WhatsApp.</p>
        </form>
        <Link to="/portfolio" className="text-link">Explore the portfolio first ↗</Link>
      </div>
      <aside className="contact-side"><span className="contact-monogram">G.</span><p>GLOW BY ESHA</p><small>MAKEUP ARTISTRY</small></aside>
    </main>
  );
}

export default Contact;