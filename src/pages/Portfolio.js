import React, { useState } from 'react';
import '../styles/Portfolio.css';

const categories = ['All work', 'Bridal', 'Party', 'Soft glam'];

function Portfolio() {
  const [active, setActive] = useState('All work');
  const slots = [
    { id: 1, category: 'Bridal', title: 'Bridal makeup' },
    { id: 2, category: 'Party', title: 'Evening glam' },
    { id: 3, category: 'Soft glam', title: 'Soft glam' },
    { id: 4, category: 'Bridal', title: 'Traditional bridal' },
    { id: 5, category: 'Party', title: 'Celebration look' },
    { id: 6, category: 'Soft glam', title: 'Natural finish' }
  ];
  const visible = active === 'All work' ? slots : slots.filter(item => item.category === active);

  return (
    <main className="portfolio-page">
      <header className="portfolio-intro">
        <p className="eyebrow">THE WORK</p>
        <h1>Looks made to<br /><em>be remembered.</em></h1>
        <p>A growing collection of makeup artistry by Glow By Esha. Each frame will feature real client work.</p>
      </header>
      <div className="portfolio-filters" role="group" aria-label="Filter portfolio">
        {categories.map(category => <button key={category} className={active === category ? 'filter active' : 'filter'} onClick={() => setActive(category)}>{category}</button>)}
      </div>
      <div className="portfolio-gallery">
        {visible.map((item, index) => (
          <article className={'portfolio-tile tile-' + (index % 3)} key={item.id}>
            <div className="gallery-placeholder"><span>PHOTO {String(item.id).padStart(2, '0')}</span><small>Replace with Esha's original work</small></div>
            <div className="tile-meta"><div><span>{item.category}</span><h2>{item.title}</h2></div><span className="tile-index">0{item.id}</span></div>
          </article>
        ))}
      </div>
      <p className="portfolio-footnote">The photo spaces are placeholders for authentic Glow By Esha work. No stock photos or sample client images are used.</p>
    </main>
  );
}

export default Portfolio;
