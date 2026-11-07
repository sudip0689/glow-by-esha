import React from 'react';
import '../styles/Portfolio.css';

const collections = [
  {
    id: 'person-one',
    number: '01',
    title: 'The Red Bridal Look',
    subtitle: 'A celebration in red',
    description: 'A rich, radiant bridal look with intricate details, warm tones and timeless elegance.',
    count: 10,
    photos: [
      ['DSC00594.JPG', 'The first portrait'],
      ['DSC00593 (1).JPG', 'A graceful side profile'],
      ['DSC00615.JPG', 'The complete bridal look'],
      ['DSC00616.JPG', 'A moment of elegance'],
      ['DSC00617.JPG', 'Traditional bridal details'],
      ['DSC00618.JPG', 'The finishing touches'],
      ['DSC00619.JPG', 'A quiet bridal moment'],
      ['DSC00620.JPG', 'The signature look'],
      ['DSC00621.JPG', 'Beauty in every detail'],
      ['DSC00624.JPG', 'A final portrait']
    ],
    folder: 'person-1-red'
  },
  {
    id: 'person-two',
    number: '02',
    title: 'The White & Red Bengali Look',
    subtitle: 'Tradition, softly expressed',
    description: 'A classic Bengali bridal expression, paired with the beauty of the white-and-red saree and traditional adornments.',
    count: 5,
    photos: [
      ['DSC08318.JPG', 'A close-up portrait'],
      ['DSC08326.JPG', 'A graceful pose'],
      ['DSC08326-1.jpg', 'A timeless smile'],
      ['1794023950139.jpg', 'A quiet traditional moment'],
      ['1794023946513.jpg', 'The complete look']
    ],
    folder: 'person-2-white'
  }
];

function Portfolio() {
  return (
    <main className="portfolio-page bridal-portfolio">
      <header className="portfolio-intro">
        <p className="eyebrow">GLOW BY ESHA · THE PORTFOLIO</p>
        <h1>Two brides.<br /><em>Two stories.</em></h1>
        <p>Every look has its own personality. Explore each bridal story in its own space, with every photograph kept together.</p>
      </header>

      {collections.map((collection) => (
        <section className="bridal-collection" id={collection.id} key={collection.id} aria-labelledby={collection.id + '-title'}>
          <div className="collection-heading">
            <div className="collection-kicker"><span>{collection.number} / BRIDAL STORY</span><span>{collection.count} PHOTOGRAPHS</span></div>
            <p className="eyebrow">{collection.subtitle}</p>
            <h2 id={collection.id + '-title'}>{collection.title}</h2>
            <p className="collection-description">{collection.description}</p>
          </div>
          <div className="portfolio-gallery collection-gallery">
            {collection.photos.map(([filename, caption], index) => (
              <article className={'portfolio-tile bridal-tile ' + (index === 0 ? 'bridal-tile-feature' : '')} key={filename}>
                <div className="bridal-image-wrap">
                  <img
                    src={'/images/bridal/' + collection.folder + '/' + filename}
                    alt={collection.title + ' makeup by Glow By Esha — ' + caption}
                    loading={index === 0 ? 'eager' : 'lazy'}
                    decoding="async"
                  />
                  <span className="image-number">{String(index + 1).padStart(2, '0')}</span>
                </div>
                <div className="tile-meta">
                  <div><span>{collection.subtitle}</span><h3>{caption}</h3></div>
                  <span className="tile-index">{String(index + 1).padStart(2, '0')} / {collection.count}</span>
                </div>
              </article>
            ))}
          </div>
        </section>
      ))}
      <footer className="portfolio-endnote">
        <span>MADE WITH CARE · GLOW BY ESHA</span>
        <p>Real artistry. Real moments. A little piece of her story.</p>
      </footer>
    </main>
  );
}

export default Portfolio;
