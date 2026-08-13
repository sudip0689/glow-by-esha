import React, { useState } from 'react';
import '../styles/Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        date: '',
        message: ''
      });
    }, 3000);
  };

  return (
    <div className="contact">
      <div className="contact-header">
        <h1>Get in Touch</h1>
        <p>Book your makeup appointment or inquire about services</p>
      </div>

      <div className="contact-container">
        <div className="contact-info">
          <h2>Contact Information</h2>
          <div className="info-item">
            <span className="icon">📱</span>
            <div>
              <h4>Phone</h4>
              <p>+91 98765 43210</p>
            </div>
          </div>
          <div className="info-item">
            <span className="icon">📧</span>
            <div>
              <h4>Email</h4>
              <p>hello@glowbyesha.com</p>
            </div>
          </div>
          <div className="info-item">
            <span className="icon">📍</span>
            <div>
              <h4>Location</h4>
              <p>Mumbai, India</p>
            </div>
          </div>
          <div className="info-item">
            <span className="icon">🕐</span>
            <div>
              <h4>Hours</h4>
              <p>Mon - Sat: 10 AM - 8 PM</p>
              <p>Sun: By appointment</p>
            </div>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <h2>Booking Form</h2>
          
          <div className="form-group">
            <label>Full Name *</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Your name"
            />
          </div>

          <div className="form-group">
            <label>Email *</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="your@email.com"
            />
          </div>

          <div className="form-group">
            <label>Phone Number *</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              placeholder="+91 XXXXX XXXXX"
            />
          </div>

          <div className="form-group">
            <label>Service Interested In *</label>
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              required
            >
              <option value="">Select a service</option>
              <option value="bridal">Bridal Makeup</option>
              <option value="party">Party & Event Makeup</option>
              <option value="photoshoot">Photoshoot Makeup</option>
              <option value="daily">Daily Glam</option>
              <option value="lessons">Makeup Lessons</option>
              <option value="airbrush">Airbrush Makeup</option>
            </select>
          </div>

          <div className="form-group">
            <label>Preferred Date</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              placeholder="Select date"
            />
          </div>

          <div className="form-group">
            <label>Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell me about your event or requirements..."
              rows="4"
            ></textarea>
          </div>

          {submitted && <div className="success-message">✨ Thank you! I'll get back to you soon!</div>}
          
          <button type="submit" className="submit-btn">Send Booking Request</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
