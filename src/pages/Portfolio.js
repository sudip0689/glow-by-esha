import React, { useEffect, useState } from 'react';
import { supabase, PHOTO_BUCKET } from '../lib/supabase';
import '../styles/Portfolio.css';

const collections = [
  { id: 'person-one', number: '01', title: 'The Red Bridal Look', subtitle: 'A celebration in red', description: 'লাল রঙের আভিজাত্য, নিখুঁত ডিটেলিং আর বাঙালি বিয়ের চিরন্তন সৌন্দর্য—একটি সাজে ঐতিহ্য ও ব্যক্তিত্বের মেলবন্ধন।', folder: 'person-1-red' },
  { id: 'person-two', number: '02', title: 'The White & Red Bengali Look', subtitle: 'Tradition, softly expressed', description: 'সাদা-লালের চিরপরিচিত বাঙালি সাজ, সঙ্গে ঐতিহ্যবাহী অলংকার ও স্নিগ্ধ সৌন্দর্যের ছোঁয়া।', folder: 'person-2-white' }
];

function Portfolio() {
  const [gallery, setGallery] = useState({});
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

  return (
    <main className="portfolio-page bridal-portfolio">
      <header className="portfolio-intro">
        <p className="eyebrow">GLOW BY ESHA · THE PORTFOLIO</p>
        <h1>Two brides.<br /><em>Two stories.</em></h1>
        <p>প্রতিটি সাজের নিজস্ব গল্প আছে। প্রতিটি ব্রাইডাল লুকের ছবি আলাদা কালেকশনে সাজানো—দেখে নিন পছন্দের সাজটি।</p>
      </header>
      {collections.map(collection => {
        const photos = gallery[collection.folder] || [];
        return (
          <section className="bridal-collection" id={collection.id} key={collection.id} aria-labelledby={collection.id + '-title'}>
            <div className="collection-heading">
              <div className="collection-kicker"><span>{collection.number} / BRIDAL STORY</span><span>{photos.length} PHOTOGRAPHS</span></div>
              <p className="eyebrow">{collection.subtitle}</p>
              <h2 id={collection.id + '-title'}>{collection.title}</h2>
              <p className="collection-description">{collection.description}</p>
            </div>
            <div className="portfolio-gallery collection-gallery">
              {photos.map((photo, index) => (
                <article className={'portfolio-tile bridal-tile ' + (index === 0 ? 'bridal-tile-feature' : '')} key={photo.name}>
                  <div className="bridal-image-wrap">
                    <img src={photo.url} alt={collection.title + ' makeup by Glow By Esha'} loading={index === 0 ? 'eager' : 'lazy'} decoding="async" />
                    <span className="image-number">{String(index + 1).padStart(2, '0')}</span>
                  </div>
                  <div className="tile-meta">
                    <div><span>{collection.subtitle}</span><h3>{index === 0 ? 'The Bridal Portrait' : 'Bridal Look ' + String(index + 1).padStart(2, '0')}</h3></div>
                    <span className="tile-index">{String(index + 1).padStart(2, '0')} / {photos.length}</span>
                  </div>
                </article>
              ))}
            </div>
            {!photos.length && <p className="collection-description">নতুন ছবি খুব শীঘ্রই যোগ করা হবে।</p>}
          </section>
        );
      })}
      <footer className="portfolio-endnote"><span>MADE WITH CARE · GLOW BY ESHA</span><p>যত্নে তৈরি প্রতিটি সাজ, আপনার গল্পেরই একটি অংশ।</p></footer>
    </main>
  );
}

export default Portfolio;