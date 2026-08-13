import React from 'react';
import '../styles/Services.css';

function Services() {
  const services = [
    {
      id: 1,
      title: 'Bridal Makeup',
      price: '₹5,000 - ₹8,000',
      description: 'Complete bridal look with trial session, HD makeup, and touch-up kit',
      features: ['Trial included', 'Long-lasting formula', 'Touch-up kit', 'On-location service']
    },
    {
      id: 2,
      title: 'Party & Event Makeup',
      price: '₹2,500 - ₹4,000',
      description: 'Professional makeup for birthdays, anniversaries, and celebrations',
      features: ['Custom look', 'Photography-ready', 'Makeup touch-ups', 'Professional products']
    },
    {
      id: 3,
      title: 'Photoshoot Makeup',
      price: '₹3,000 - ₹5,000',
      description: 'Specialized makeup designed to look perfect on camera',
      features: ['Camera-tested', 'Professional lighting', 'Color-accurate', 'Retouches included']
    },
    {
      id: 4,
      title: 'Daily Glam Makeup',
      price: '₹1,500 - ₹2,500',
      description: 'Enhance your natural beauty with everyday makeup',
      features: ['Natural finish', 'Quick application', 'Long-wearing', 'Professional consultation']
    },
    {
      id: 5,
      title: 'Makeup Lessons',
      price: '₹2,000 per session',
      description: 'Learn professional makeup techniques one-on-one',
      features: ['1-hour sessions', 'Personalized coaching', 'Product recommendations', 'Certificate of completion']
    },
    {
      id: 6,
      title: 'Airbrush Makeup',
      price: '₹4,000 - ₹6,000',
      description: 'Flawless, long-lasting airbrush makeup for special events',
      features: ['Flawless finish', '12+ hours durability', 'HD coverage', 'Professional results']
    }
  ];

  return (
    <div className="services">
      <div className="services-header">
        <h1>My Services</h1>
        <p>Professional makeup services tailored to your needs</p>
      </div>

      <div className="services-container">
        <div className="services-grid">
          {services.map((service) => (
            <div key={service.id} className="service-card-full">
              <h3>{service.title}</h3>
              <p className="price">{service.price}</p>
              <p className="description">{service.description}</p>
              <ul className="features">
                {service.features.map((feature, index) => (
                  <li key={index}>✓ {feature}</li>
                ))}
              </ul>
              <button className="book-btn">Book Now</button>
            </div>
          ))}
        </div>
      </div>

      <div className="services-note">
        <h3>💝 Custom Packages Available</h3>
        <p>Need a custom package? Contact me to discuss your specific requirements and budget.</p>
      </div>
    </div>
  );
}

export default Services;
