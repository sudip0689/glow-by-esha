import React from 'react';
import '../styles/About.css';

function About() {
  return (
    <div className="about">
      <div className="about-header">
        <h1>About Esha</h1>
      </div>

      <div className="about-container">
        <div className="about-image">
          <div className="about-placeholder">👩‍💼</div>
        </div>
        <div className="about-content">
          <h2>Professional Makeup Artist</h2>
          <p>
            Hi! I'm Esha, a passionate makeup artist dedicated to bringing out the best in every client. With over 8 years of experience in the beauty industry, I specialize in creating stunning looks for all occasions.
          </p>
          <p>
            My journey began with a love for creativity and beauty. I've trained under renowned makeup artists and have worked with clients for weddings, photoshoots, parties, and special events.
          </p>
          <p>
            I believe every person has their own unique beauty. My goal is to enhance your natural features while making you feel confident and gorgeous.
          </p>

          <div className="about-skills">
            <h3>Specializations</h3>
            <ul>
              <li>✨ Bridal & Engagement Makeup</li>
              <li>💄 Party & Event Makeup</li>
              <li>📸 Photoshoot & Portfolio Makeup</li>
              <li>👄 Contouring & Highlighting</li>
              <li>💎 Airbrush Makeup</li>
              <li>🎨 Creative & Artistic Makeup</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
