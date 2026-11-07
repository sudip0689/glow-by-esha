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
      <section className="hero makeup-hero">
        <div className="hero-copy makeup-hero-copy">
          <p className="eyebrow">BRIDAL MAKEUP ARTISTRY</p>
          <h1>Beauty is in<br /><em>the details.</em></h1>
          <p className="hero-description">Thoughtful makeup for brides and special occasions. Beautifully considered, personally created.</p>
          <div className="hero-actions makeup-hero-actions">
            <Link to="/portfolio" className="button button-dark">Explore portfolio <span>↗</span></Link>
            <Link to="/about" className="text-link">Meet Esha</Link>
          </div>
          <div className="makeup-service-line"><span>✧</span> Bridal <i /> Party <i /> Soft Glam</div>
        </div>
        <div className="makeup-hero-art" aria-label="Close-up makeup artistry details">
          <div className="makeup-eye-image" role="img" aria-label="Close-up eye makeup detail" />
          <div className="makeup-art-caption"><span>THE ART OF DETAIL</span><span>GLOW BY ESHA</span></div>
          <div className="makeup-art-seal">BEAUTY<br/>IN DETAIL</div>
        </div>
      </section>

      <section className="makeup-focus">
        <div className="makeup-focus-heading"><p className="eyebrow">EXPLORE OUR WORK</p><h2>Made with <em>intention.</em></h2></div>
        <div className="makeup-focus-grid">
          <Link to="/portfolio" className="makeup-focus-card eye-detail"><span className="focus-index">01</span><span className="focus-title">Eye makeup<br/>details <b>↗</b></span></Link>
          <Link to="/portfolio" className="makeup-focus-card brush-detail"><span className="focus-index">02</span><span className="focus-title">Makeup<br/>artistry <b>↗</b></span></Link>
          <Link to="/portfolio" className="makeup-focus-card lip-detail"><span className="focus-index">03</span><span className="focus-title">Lip<br/>finishing <b>↗</b></span></Link>
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
          <Link to="/portfolio" className="category-card category-bridal" style={homePhotos.red[0] ? { backgroundImage: "linear-gradient(180deg,rgba(25,16,15,.02) 20%,rgba(25,16,15,.78) 100%),url(" + homePhotos.red[0] + ")" } : {}}>
            <span className="category-number">01 <small> / 10 LOOKS</small></span>
            <div className="category-copy"><p>THE RED BRIDAL COLLECTION</p><h3>Red Bridal<br /><em>Looks</em></h3><span className="category-description">Timeless details. A statement of tradition.</span></div>
            <span className="category-arrow">Explore collection ↗</span>
          </Link>
          <Link to="/portfolio" className="category-card category-party" style={homePhotos.white[0] ? { backgroundImage: "linear-gradient(180deg,rgba(25,16,15,.02) 20%,rgba(25,16,15,.78) 100%),url(" + homePhotos.white[0] + ")" } : {}}>
            <span className="category-number">02 <small> / 05 LOOKS</small></span>
            <div className="category-copy"><p>THE BENGALI BRIDAL COLLECTION</p><h3>White & Red<br /><em>Bengali Bride</em></h3><span className="category-description">Classic elegance, rooted in tradition.</span></div>
            <span className="category-arrow">Explore collection ↗</span>
          </Link>
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
