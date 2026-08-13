import React from 'react';
import '../styles/Portfolio.css';

function Portfolio() {
  const portfolioItems = [
    {
      id: 1,
      title: 'Bridal Glow',
      category: 'Bridal',
      description: 'Classic bridal makeup with golden highlights',
      image: '💄'
    },
    {
      id: 2,
      title: 'Smokey Eyes',
      category: 'Party',
      description: 'Bold smokey eye makeup for evening events',
      image: '✨'
    },
    {
      id: 3,
      title: 'Natural Beauty',
      category: 'Daily',
      description: 'Subtle everyday makeup that enhances features',
      image: '👄'
    },
    {
      id: 4,
      title: 'Glitter Glam',
      category: 'Party',
      description: 'Sparkling makeup for special occasions',
      image: '💎'
    },
    {
      id: 5,
      title: 'Bold Red Lips',
      category: 'Party',
      description: 'Timeless red lip makeup with contouring',
      image: '💋'
    },
    {
      id: 6,
      title: 'Festival Look',
      category: 'Photoshoot',
      description: 'Creative festival-inspired makeup art',
      image: '🎨'
    }
  ];

  return (
    <div className="portfolio">
      <div className="portfolio-header">
        <h1>My Makeup Portfolio</h1>
        <p>A showcase of my best work and creative looks</p>
      </div>

      <div className="portfolio-grid">
        {portfolioItems.map((item) => (
          <div key={item.id} className="portfolio-card">
            <div className="portfolio-image">{item.image}</div>
            <div className="portfolio-content">
              <span className="portfolio-category">{item.category}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
