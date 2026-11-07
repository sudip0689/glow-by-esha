import React, { useState } from 'react';
import '../styles/Portfolio.css';

const categories = ['All work', 'Bridal'];

const photoTitles = [
  'A Bengali Bride',
  'The Bridal Glow',
  'A Moment of Grace',
  'The Complete Look',
  'Tradition in Every Detail',
  'A Classic Bengali Look',
  'Elegance in Every Detail',
  'The Bridal Portrait',
  'A Touch of Tradition',
  'Beauty in Bloom',
  'The Signature Look',
  'Graceful and Timeless',
  'The Finishing Touch',
  'A Bride to Remember',
  'The Art of Bridal Beauty'
];

const looks = photoTitles.map((title, index) => ({
  id: index + 1,
  image: '/images/bridal/bengali-bridal-' + String(index + 1).padStart(2, '0') + '.jpg',
  title,
  detail: 'Traditional Bengali Bridal'
}));

function Portfolio() {
  const [active, setActive] = useState('All work');
  const visible = active === 'All work' ? looks : looks.filter(item => item.detail.includes(active));

  return (
    <main className="portfolio-page bridal-portfolio">
      <header className="portfolio-intro">
        <p className="eyebrow">GLOW BY ESHA · THE PORTFOLIO</p>
        <h1>Beauty rooted in<br /><em>tradition.</em></h1>
        <p>Every bride has a story. A celebration of Bengali bridal beauty, thoughtful details and the confidence that comes from feeling like yourself.</p>
      </header>

      <div className="portfolio-feature-note">
        <span>01 / BRIDAL STORIES</span>
        <span>15 MOMENTS · ONE COLLECTION</span>
      </div>

      <div className="portfolio-filters" role="group" aria-label="Filter portfolio">
        {categories.map(category => (
          <button key={category} type="button" className={active === category ? 'filter active' : 'filter'} aria-pressed={active === category} onClick={() => setActive(category)}>{category}</button>
        ))}
      </div>

      <section className="portfolio-gallery" aria-label="Traditional Bengali bridal makeup portfolio">
        {visible.map((item, index) => (
          <article className={'portfolio-tile bridal-tile ' + (index === 0 ? 'bridal-tile-feature' : '')} key={item.id}>
            <div className="bridal-image-wrap">
              <img
                src={item.image}
                alt={item.detail + ' makeup look by Glow By Esha — photo ' + item.id}
                loading={index === 0 ? 'eager' : 'lazy'}
                decoding="async"
                fetchPriority={index === 0 ? 'high' : 'auto'}
              />
              <span className="image-number">{String(item.id).padStart(2, '0')}</span>
            </div>
            <div className="tile-meta">
              <div><span>{item.detail}</span><h2>{item.title}</h2></div>
              <span className="tile-index">{String(item.id).padStart(2, '0')} / 15</span>
            </div>
          </article>
        ))}
      </section>
      <footer className="portfolio-endnote">
        <span>MADE WITH CARE · GLOW BY ESHA</span>
        <p>Real artistry. Real moments. A little piece of her story.</p>
      </footer>
    </main>
  );
}

export default Portfolio;
