import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';
import { supabase, PHOTO_BUCKET } from '../lib/supabase';

function Home() {
  const [homePhotos, setHomePhotos] = useState({ red: [], white: [] });
  const [photosLoaded, setPhotosLoaded] = useState(false);
  const [activeVideo, setActiveVideo] = useState(null);
  const heroPhoto = homePhotos.red.find(url => /DSC00616\.JPG/i.test(decodeURIComponent(url))) || homePhotos.red[0];
  useEffect(() => {
    let active = true;
    Promise.all(['person-1-red', 'person-2-white'].map(async folder => {
      const { data } = await supabase.storage.from(PHOTO_BUCKET).list(folder, { limit: 20, sortBy: { column: 'name', order: 'asc' } });
      return (data || []).filter(item => item.name && !item.name.startsWith('.')).map(item => supabase.storage.from(PHOTO_BUCKET).getPublicUrl(folder + '/' + item.name).data.publicUrl);
    })).then(([red, white]) => { if (active) setHomePhotos({ red, white }); }).catch(() => { if (active) setHomePhotos({ red: [], white: [] }); }).finally(() => { if (active) setPhotosLoaded(true); });
    return () => { active = false; };
  }, []);
  return (
    <main className="home">
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">MAKEUP • BEAUTY • CONFIDENCE</p>
          <h1>Beauty, with<br /><em>a personal touch.</em></h1>
          <p className="hero-description">আপনার বিশেষ মুহূর্তের জন্য যত্ন, দক্ষতা ও আপনার নিজস্ব সৌন্দর্যকে গুরুত্ব দিয়ে তৈরি Makeup Artistry।</p>
          <div className="hero-actions">
            <Link to="/portfolio" className="button button-dark">Explore the portfolio <span>↗</span></Link>
            <Link to="/about" className="text-link">Meet Esha</Link>
          </div>
          <div className="hero-note"><span className="note-line" /> আপনার সৌন্দর্য, আপনার নিজস্ব স্টাইল</div>
        </div>
        <div className="hero-art" aria-label="Portfolio photo area">
          <div className="hero-frame">
            {heroPhoto ? <img className="home-hero-photo" src={heroPhoto} alt="Featured red bridal look by Glow By Esha" fetchPriority="high" decoding="async" /> : <div className="photo-placeholder" role="status">{photosLoaded ? <><span>GLOW BY ESHA</span><small>Bridal portfolio</small></> : <span>Loading portfolio…</span>}</div>}
            <div className="frame-caption"><span>THE ART OF THE GLOW</span><span>01 / 01</span></div>
          </div>
          <span className="hero-stamp">GLOW<br />BY ESHA</span>
        </div>
      </section>

      <section className="intro-strip">
        <p>MAKEUP THAT FEELS LIKE YOU</p>
        <span>আপনার পছন্দ · যত্নশীল কাজ · চিরন্তন সৌন্দর্য</span>
      </section>

      <section className="home-section">
        <div className="section-heading">
          <div><p className="eyebrow">THE PORTFOLIO</p><h2>Every look tells<br /><em>its own story.</em></h2><p className="section-description">প্রতিটি সাজের রয়েছে নিজস্ব গল্প। আমাদের কাজের কিছু মুহূর্ত দেখে নিন।</p></div>
          <Link to="/portfolio" className="text-link">View all work ↗</Link>
        </div>
        <div className="category-grid">
          <Link to="/portfolio#person-one" className="category-card category-bridal" style={homePhotos.red[0] ? { backgroundImage: "linear-gradient(180deg,rgba(25,16,15,.02) 20%,rgba(25,16,15,.78) 100%),url(" + homePhotos.red[0] + ")" } : {}}>
            <span className="category-number">01 <small> / 10 LOOKS</small></span>
            <div className="category-copy"><p>THE MUSLIM BRIDAL COLLECTION</p><h3>Muslim Bridal<br /><em>Look</em></h3><span className="category-description">আভিজাত্য, নিখুঁত ডিটেলিং ও ব্যক্তিত্বের ছোঁয়া।</span></div>
            <span className="category-arrow">Explore collection ↗</span>
          </Link>
          <Link to="/portfolio#person-two" className="category-card category-party" style={homePhotos.white[0] ? { backgroundImage: "linear-gradient(180deg,rgba(25,16,15,.02) 20%,rgba(25,16,15,.78) 100%),url(" + homePhotos.white[0] + ")" } : {}}>
            <span className="category-number">02 <small> / 05 LOOKS</small></span>
            <div className="category-copy"><p>THE BRIDDHI COLLECTION</p><h3>Briddhi<br /><em>Look</em></h3><span className="category-description">ঐতিহ্য আর আধুনিকতার মেলবন্ধনে এক অনন্য সাজ।</span></div>
            <span className="category-arrow">Explore collection ↗</span>
          </Link>
        </div>
      </section>

      <section className="bridal-films" aria-labelledby="bridal-films-title">
        <div className="films-heading">
          <div>
            <p className="eyebrow">A CLOSER LOOK</p>
            <h2 id="bridal-films-title">Watch the <em>looks.</em></h2>
            <p className="section-description">ভিডিওতে দেখে নিন সাজের আরও কিছু খুঁটিনাটি।</p>
          </div>
          <Link to="/portfolio" className="films-more">Explore all work ↗</Link>
        </div>
        <div className="films-grid">
          <article className="film-card">
            <div className="film-video-wrap">{activeVideo === "dZkeBs8gInM" ? <iframe src="https://www.youtube-nocookie.com/embed/dZkeBs8gInM?autoplay=1&rel=0&controls=1&fs=1&playsinline=0&iv_load_policy=3" title="The Bengali Bride — Glow By Esha" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen /> : <button className="film-preview" onClick={() => setActiveVideo("dZkeBs8gInM")} aria-label="Play The Bengali Bride"><img src="https://img.youtube.com/vi/dZkeBs8gInM/hqdefault.jpg" alt="The Bengali bride video preview" /><span className="film-play">▶</span></button>}</div>
            <div className="film-caption"><span className="film-index">01 / BRIDAL</span><h3>The Bengali bride</h3></div>
          </article>
          <article className="film-card">
            <div className="film-video-wrap">{activeVideo === "LG1z4GUeZBI" ? <iframe src="https://www.youtube-nocookie.com/embed/LG1z4GUeZBI?autoplay=1&rel=0&controls=1&fs=1&playsinline=0&iv_load_policy=3" title="The Elegant Bride — Glow By Esha" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen /> : <button className="film-preview" onClick={() => setActiveVideo("LG1z4GUeZBI")} aria-label="Play The Elegant Bride"><img src="https://img.youtube.com/vi/LG1z4GUeZBI/hqdefault.jpg" alt="The elegant bride video preview" /><span className="film-play">▶</span></button>}</div>
            <div className="film-caption"><span className="film-index">02 / BRIDAL</span><h3>The elegant bride</h3></div>
          </article>
        </div>
      </section>

      <section className="about-teaser">
        <div className="about-teaser-mark">E.</div>
        <div><p className="eyebrow">A LITTLE ABOUT THE ARTIST</p><h2>It should still<br /><em>feel like you.</em></h2><p className="teaser-copy">সাজের পরেও আপনার নিজস্বতা যেন অটুট থাকে। আপনার পছন্দ ও ব্যক্তিত্বকে গুরুত্ব দিয়েই প্রতিটি লুক তৈরি করা হয়।</p><Link to="/about" className="text-link">Get to know Esha ↗</Link></div>
      </section>

      <section className="home-cta"><p className="eyebrow">YOUR MOMENT, YOUR LOOK</p><h2>Let's create something<br /><em>beautiful.</em></h2><p>আপনার বিশেষ দিনের সাজ নিয়ে কথা বলতে যোগাযোগ করুন।</p><Link to="/contact" className="button button-light">Get in touch <span>↗</span></Link></section>
    </main>
  );
}

export default Home;