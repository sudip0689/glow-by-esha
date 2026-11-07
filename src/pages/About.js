import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/About.css';

function About() {
  return (
    <main className="about-page">
      <header className="simple-page-head"><p className="eyebrow">THE ARTIST</p><h1>Meet <em>Esha.</em></h1><p>A personal approach to makeup, beauty and self-expression.</p><Link className="about-home-link" to="/">← Back to Home</Link></header>
      <section className="about-layout">
        <div className="about-photo"><span>ESHA'S PORTRAIT</span><small>Add a real artist photograph here</small></div>
        <div className="about-story"><p className="eyebrow">A NOTE FROM ESHA</p><h2>Makeup should highlight you,<br /><em>not hide you.</em></h2><p>Glow By Esha is a space to celebrate individual beauty through thoughtful makeup artistry. The focus is on understanding each person's style, occasion and comfort, then creating a look that feels like them.</p><p>This page will be updated with Esha's personal story, training and experience once those details are confirmed.</p><div className="about-values"><span>PERSONAL STYLE</span><span>THOUGHTFUL DETAILS</span><span>CONFIDENT BEAUTY</span></div></div>
      </section>
    </main>
  );
}
export default About;
