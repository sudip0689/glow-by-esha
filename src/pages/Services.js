import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Services.css';

const services = [
  ['01', 'Bridal makeup', 'A considered look for your wedding day, shaped around your outfit, preferences and personal style.'],
  ['02', 'Engagement & celebrations', 'Polished makeup for engagement ceremonies, receptions and special family occasions.'],
  ['03', 'Party & event makeup', 'A look designed for the mood of the event, from soft and understated to more defined glam.'],
  ['04', 'Soft glam', 'A fresh, balanced finish that enhances your natural features without feeling overdone.']
];

function Services() {
  return (
    <main className="services-page">
      <header className="simple-page-head"><p className="eyebrow">WHAT I DO</p><h1>Looks for every<br /><em>kind of moment.</em></h1><p>Explore the makeup styles offered by Glow By Esha. Availability and package details can be discussed directly.</p></header>
      <section className="service-list">{services.map(([number,title,description]) => <article className="service-row" key={number}><span className="service-number">{number}</span><div><h2>{title}</h2><p>{description}</p></div><span className="service-mark">↗</span></article>)}</section>
      <div className="services-cta"><p>Have a specific look in mind?</p><Link to="/contact" className="button button-dark">Make an enquiry <span>↗</span></Link></div>
    </main>
  );
}
export default Services;
