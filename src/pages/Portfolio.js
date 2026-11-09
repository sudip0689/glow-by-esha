import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { supabase, PHOTO_BUCKET } from '../lib/supabase';
import '../styles/Portfolio.css';

const collections = [
  { id: 'person-one', number: '01', title: 'Muslim Bridal Look', shortTitle: 'Muslim Bridal', subtitle: 'THE MUSLIM BRIDAL COLLECTION', description: 'আভিজাত্য, নিখুঁত ডিটেলিং আর ব্যক্তিত্বের ছোঁয়ায় সাজানো এক বিশেষ ব্রাইডাল লুক।', folder: 'person-1-red' },
  { id: 'person-two', number: '02', title: 'Briddhi Look', shortTitle: 'Briddhi', subtitle: 'THE BRIDDHI COLLECTION', description: 'ঐতিহ্য ও আধুনিকতার মেলবন্ধনে যত্নে তৈরি এক অনন্য সাজ।', folder: 'person-2-white' }
];

function Portfolio() {
  const [gallery, setGallery] = useState({});
  const [preview, setPreview] = useState(null);
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) return;
    const targetId = decodeURIComponent(location.hash.slice(1));
    const timer = window.setTimeout(() => document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 120);
    return () => window.clearTimeout(timer);
  }, [location.hash]);

  useEffect(() => {
    let active = true;
    Promise.all(collections.map(async collection => {
      const { data, error } = await supabase.storage.from(PHOTO_BUCKET).list(collection.folder, { limit: 100, sortBy: { column: 'name', order: 'asc' } });
      if (error) return [collection.folder, []];
      return [collection.folder, (data || []).filter(item => item.name && !item.name.startsWith('.')).map(item => ({
        name: item.name,
        url: supabase.storage.from(PHOTO_BUCKET).getPublicUrl(collection.folder + '/' + item.name).data.publicUrl
      }))];
    })).then(entries => { if (active) setGallery(Object.fromEntries(entries)); });
    return () => { active = false; };
  }, []);

  const featuredPhoto = gallery[collections[0].folder]?.[0];

  return (
    <main className="portfolio-page bridal-portfolio">
      <header className="portfolio-intro">
        <p className="eyebrow">GLOW BY ESHA · PORTFOLIO</p>
        <h1>Our Work,<br /><em>Real Brides.</em></h1>
        <p>আমার সাজানো কিছু বিশেষ দিনের কিছু প্রিয় মুহূর্ত।</p>
      </header>

      {featuredPhoto && (
        <section className="portfolio-feature" aria-label="Featured bridal look">
          <button type="button" className="portfolio-feature-image" onClick={() => setPreview({ src: featuredPhoto.url, alt: 'Featured bridal look by Glow By Esha' })} aria-label="View featured bridal photograph">
            <img src={featuredPhoto.url} alt="Featured bridal look by Glow By Esha" fetchPriority="high" />
          </button>
          <div className="portfolio-feature-copy">
            <span className="eyebrow">FEATURED BRIDAL STORY</span>
            <h2>Bridal <em>Look</em></h2>
            <p>বিয়ের দিনের ক্লাসিক, এলিগেন্ট ও রাজকীয় সাজ।</p>
            <a href="#person-one" className="portfolio-feature-link">View collection <span>↗</span></a>
          </div>
        </section>
      )}

      <nav className="portfolio-collection-nav" aria-label="Portfolio collections">
        {collections.map(collection => {
          const cover = gallery[collection.folder]?.[0];
          return (
            <a className="portfolio-collection-card" href={'#' + collection.id} key={collection.id}>
              {cover && <img src={cover.url} alt="" loading="lazy" />}
              <span className="portfolio-card-shade" />
              <span className="portfolio-card-copy"><small>{collection.number} · COLLECTION</small><strong>{collection.shortTitle}</strong><span>Explore ↗</span></span>
            </a>
          );
        })}
      </nav>

      {collections.map(collection => {
        const photos = gallery[collection.folder] || [];
        return (
          <section className="bridal-collection" id={collection.id} key={collection.id} aria-labelledby={collection.id + '-title'}>
            <div className="collection-heading">
              <span className="eyebrow">{collection.subtitle}</span>
              <h2 id={collection.id + '-title'}>{collection.title}</h2>
              <p>{collection.description}</p>
            </div>
            <div className="portfolio-clean-gallery">
              {photos.map((photo, index) => (
                <button type="button" className="portfolio-clean-photo" key={photo.name} onClick={() => setPreview({ src: photo.url, alt: collection.title + ' makeup by Glow By Esha' })} aria-label={'View ' + collection.title + ' photo ' + (index + 1)}>
                  <img src={photo.url} alt={collection.title + ' makeup by Glow By Esha'} loading="lazy" decoding="async" />
                </button>
              ))}
            </div>
            {!photos.length && <p className="collection-empty">নতুন ছবি খুব শীঘ্রই যোগ করা হবে।</p>}
          </section>
        );
      })}

      <section className="portfolio-booking">
        <div><span className="eyebrow">YOUR SPECIAL DAY, YOUR LOOK</span><h2>Like what you see?</h2><p>আপনার বিশেষ দিনের সাজ নিয়ে কথা বলুন।</p></div>
        <a href="https://wa.me/918116399882?text=Hello%20Glow%20By%20Esha!%20I%20would%20like%20to%20enquire%20about%20a%20makeup%20booking." target="_blank" rel="noopener noreferrer">Book on WhatsApp <span>↗</span></a>
      </section>

      {preview && <div className="photo-lightbox" role="dialog" aria-modal="true" aria-label="Photo preview" onClick={() => setPreview(null)}><button type="button" className="lightbox-close" onClick={() => setPreview(null)} aria-label="Close preview">×</button><img src={preview.src} alt={preview.alt} onClick={event => event.stopPropagation()} /></div>}
      <footer className="portfolio-endnote"><span>MADE WITH CARE · GLOW BY ESHA</span><p>যত্নে তৈরি প্রতিটি সাজ, আপনার গল্পেরই একটি অংশ।</p><Link to="/contact" className="portfolio-footer-link">Get in touch ↗</Link></footer>
    </main>
  );
}

export default Portfolio;