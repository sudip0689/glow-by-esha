import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';
import { supabase, PHOTO_BUCKET } from '../lib/supabase';

function Home() {
  const [homePhotos, setHomePhotos] = useState({ red: [], white: [] });
  useEffect(() => {
    let active = true;
    Promise.all(['person-1-red', 'person-2-white'].map(async folder => {
      const { data } = await supabase.storage.from(PHOTO_BUCKET).list(folder, { limit: 20, sortBy: { column: 'name', order: 'asc' } });
      return (data || []).filter(item => item.name && !item.name.startsWith('.')).map(item => supabase.storage.from(PHOTO_BUCKET).getPublicUrl(folder + '/' + item.name).data.publicUrl);
    })).then(([red, white]) => { if (active) setHomePhotos({ red, white }); });
    return () => { active = false; };
  }, []);
  return (
    <main className="home">
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">MAKEUP • BEAUTY • CONFIDENCE</p>
          <h1>Beauty, with<br /><em>a personal touch.</em></h1>
          <p className="hero-description">Thoughtful makeup artistry for your most meaningful moments. Explore the work, discover the details, and find your look.</p>
          <div className="hero-actions">
            <Link to="/portfolio" className="button button-dark">Explore the portfolio <span>↗</span></Link>
            <Link to="/about" className="text-link">Meet Esha</Link>
          </div>
          <div className="hero-note"><span className="note-line" /> A beauty portfolio by Glow By Esha</div>
        </div>
        <div className="hero-art" aria-label="Portfolio photo area">
          <div className="hero-frame">
            {homePhotos.red[0] ? <img className="home-hero-photo" src={homePhotos.red[0]} alt="Featured bridal makeup by Glow By Esha" /> : <div className="photo-placeholder"><span>GLOW BY ESHA</span><small>Bridal artistry · Personal expression</small></div>}
            <div className="frame-caption"><span>THE ART OF THE GLOW</span><span>01 / 01</span></div>
          </div>
          <span className="hero-stamp">GLOW<br />BY ESHA</span>
        </div>
      </section>

      <section className="intro-strip">
        <p>MAKEUP THAT FEELS LIKE YOU</p>
        <span>Personalised looks · Thoughtful details · Timeless beauty</span>
      </section>

      <section className="home-section">
        <div className="section-heading">
          <div><p className="eyebrow">THE PORTFOLIO</p><h2>Every look tells<br /><em>its own story.</em></h2></div>
          <Link to="/portfolio" className="text-link">View all work ↗</Link>
        </div>
        <div className="category-grid">
          <Link to="/portfolio" className="category-card category-bridal" style={homePhotos.red[0] ? { backgroundImage: "linear-gradient(180deg,rgba(25,16,15,.04),rgba(25,16,15,.76)),url(" + homePhotos.red[0] + ")" } : {}}><span className="category-number">01</span><div><p>THE CELEBRATION</p><h3>Bridal looks</h3></div><span className="category-arrow">↗</span></Link>
          <Link to="/portfolio" className="category-card category-party" style={homePhotos.white[0] ? { backgroundImage: "linear-gradient(180deg,rgba(25,16,15,.04),rgba(25,16,15,.76)),url(" + homePhotos.white[0] + ")" } : {}}><span className="category-number">02</span><div><p>THE OCCASION</p><h3>Party & event</h3></div><span className="category-arrow">↗</span></Link>
          <Link to="/portfolio" className="category-card category-natural" style={homePhotos.red[1] ? { backgroundImage: "linear-gradient(180deg,rgba(25,16,15,.04),rgba(25,16,15,.76)),url(" + homePhotos.red[1] + ")" } : {}}><span className="category-number">03</span><div><p>THE EVERYDAY</p><h3>Soft glam</h3></div><span className="category-arrow">↗</span></Link>
        </div>
      </section>

      <section className="bridal-films" aria-labelledby="bridal-films-title">
        <div className="films-heading">
          <div>
            <p className="eyebrow">A CLOSER LOOK</p>
            <h2 id="bridal-films-title">Watch the <em>looks.</em></h2>
          </div>
          <Link to="/portfolio" className="films-more">Explore all work ↗</Link>
        </div>
        <div className="films-grid">
          <article className="film-card">
            <a className="film-video-wrap" href="https://youtube.com/shorts/dZkeBs8gInM" target="_blank" rel="noreferrer" aria-label="Watch The Bengali Bride video on YouTube">
              <img src="https://img.youtube.com/vi/dZkeBs8gInM/hqdefault.jpg" alt="Traditional Bengali bridal makeup video preview" loading="lazy" />
              <span className="film-play">▶</span>
            </a>
            <div className="film-caption"><span className="film-index">01 / BRIDAL</span><h3>The Bengali bride</h3></div>
          </article>
          <article className="film-card">
            <a className="film-video-wrap" href="https://youtube.com/shorts/LG1z4GUeZBI" target="_blank" rel="noreferrer" aria-label="Watch The Elegant Bride video on YouTube">
              <img src="https://img.youtube.com/vi/LG1z4GUeZBI/hqdefault.jpg" alt="Elegant bridal makeup video preview" loading="lazy" />
              <span className="film-play">▶</span>
            </a>
            <div className="film-caption"><span className="film-index">02 / BRIDAL</span><h3>The elegant bride</h3></div>
          </article>
        </div>
      </section>

      <section className="about-teaser">
        <div className="about-teaser-mark">E.</div>
        <div><p className="eyebrow">A LITTLE ABOUT THE ARTIST</p><h2>It should still<br /><em>feel like you.</em></h2><p className="teaser-copy">A good makeup look doesn't hide who you are. It brings your favourite features forward and helps you feel at ease in your own skin.</p><Link to="/about" className="text-link">Get to know Esha ↗</Link></div>
      </section>

      <section className="home-cta"><p className="eyebrow">YOUR MOMENT, YOUR LOOK</p><h2>Let's create something<br /><em>beautiful.</em></h2><Link to="/contact" className="button button-light">Get in touch <span>↗</span></Link></section>
    </main>
  );
}

export default Home;
