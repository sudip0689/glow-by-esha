import React, { useState } from 'react';
import '../styles/Portfolio.css';

const categories = ['All work', 'Bridal'];

const looks = [
  { id: 1, image: '/images/bridal/bengali-bridal-01.jpg', title: 'A Bengali Bride', detail: 'Traditional Bengali Bridal', feature: true },
  { id: 2, image: '/images/bridal/bengali-bridal-02.jpg', title: 'The Bridal Glow', detail: 'Traditional Bengali Bridal' },
  { id: 3, image: '/images/bridal/bengali-bridal-03.jpg', title: 'A Moment of Grace', detail: 'Traditional Bengali Bridal' },
  { id: 4, image: '/images/bridal/bengali-bridal-04.jpg', title: 'The Complete Look', detail: 'Traditional Bengali Bridal' },
  { id: 5, image: '/images/bridal/bengali-bridal-05.jpg', title: 'Tradition in Every Detail', detail: 'Traditional Bengali Bridal' }
];

function Portfolio() {
  const [active, setActive] = useState('All work');
  const visible = active === 'All work' ? looks : looks.filter(item => item.detail.includes(active));

  return (
    <main className="portfolio-page bridal-portfolio">
      <header className="portfolio-intro">
        <p className="eyebrow">GLOW BY ESHA · THE PORTFOLIO</p>
        <h1>Beauty rooted in<br /><em>tradition.</em></h1>
        <p>Every bride has a story. This is a celebration of Bengali bridal beauty, thoughtful details and the confidence that comes from feeling like yourself.</p>
      </header>

      <div className="portfolio-feature-note">
        <span>01 / BRIDAL STORIES</span>
        <span>TRADITIONAL BENGALI BRIDAL</span>
      </div>

      <div className="portfolio-filters" role="group" aria-label="Filter portfolio">
        {categories.map(category => (
          <button key={category} className={active === category ? 'filter active' : 'filter'} onClick={() => setActive(category)}>{category}</button>
        ))}
      </div>

      <section className="portfolio-gallery" aria-label="Traditional Bengali bridal makeup portfolio">
        {visible.map((item, index) => (
          <article className={'portfolio-tile bridal-tile ' + (index === 0 ? 'bridal-tile-feature' : '')} key={item.id}>
            <div className="bridal-image-wrap">
              <img src={item.image} alt={item.detail + ' makeup look by Glow By Esha'} loading={index === 0 ? 'eager' : 'lazy'} />
              <span className="image-number">0{item.id}</span>
            </div>
            <div className="tile-meta">
              <div><span>{item.detail}</span><h2>{item.title}</h2></div>
              <span className="tile-index">GLOW BY ESHA</span>
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
