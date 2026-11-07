import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { supabase, PHOTO_BUCKET } from '../lib/supabase';
import '../styles/About.css';

function About() {
  const [portrait, setPortrait] = useState('');
  const [previewOpen, setPreviewOpen] = useState(false);
  useEffect(() => {
    let active = true;
    supabase.storage.from(PHOTO_BUCKET).list('other-photos', {
      limit: 100, sortBy: { column: 'created_at', order: 'desc' }
    }).then(({ data, error }) => {
      if (!active || error || !data) return;
      const image = data.find(item => item.name && !item.name.startsWith('.'));
      if (image) {
        const url = supabase.storage.from(PHOTO_BUCKET)
          .getPublicUrl('other-photos/' + image.name).data.publicUrl;
        setPortrait(url);
      }
    });
    return () => { active = false; };
  }, []);

  return (
    <main className="about-page">
      <section className="about-hero">
        <div className="about-hero-copy">
          <p className="eyebrow">THE ARTIST · GLOW BY ESHA</p>
          <h1>Meet <em>Esha.</em></h1>
          <p className="about-hero-description">সৌন্দর্য, সাজ ও আত্মপ্রকাশের এক ব্যক্তিগত যাত্রা। প্রতিটি লুকে আপনার নিজস্বতাই থাকুক সবার আগে।</p>
          <Link className="about-home-link" to="/">← Back to Home</Link>
        </div>
        <div className="about-hero-art" aria-label="Portrait of Esha">
          {portrait ? <button type="button" className="about-photo-preview" onClick={() => setPreviewOpen(true)} aria-label="View Esha portrait full screen"><img src={portrait} alt="Esha by the riverside" /></button> : <div className="about-photo-empty"><span>ESHA'S PORTRAIT</span><small>Upload the portrait to Other Photos in Admin</small></div>}
        </div>
      </section>
      {previewOpen && <div className="photo-lightbox" role="dialog" aria-modal="true" aria-label="Photo preview" onClick={() => setPreviewOpen(false)}><button type="button" className="lightbox-close" onClick={() => setPreviewOpen(false)} aria-label="Close preview">×</button><img src={portrait} alt="Esha by the riverside" onClick={event => event.stopPropagation()} /></div>}
      <section className="about-story">
        <p className="eyebrow">A NOTE FROM ESHA</p>
        <h2>Makeup should highlight you,<br /><em>not hide you.</em></h2>
        <div className="about-story-copy">
          <p>প্রতিটি মানুষের সৌন্দর্য আলাদা। তাই Makeup হওয়া উচিত আপনার স্বাভাবিক সৌন্দর্যকে আরও সুন্দরভাবে ফুটিয়ে তোলার একটি উপায়—আপনার নিজস্বতাকে ঢেকে দেওয়ার জন্য নয়।</p>
          <p>Glow By Esha-তে আপনার পছন্দ, অনুষ্ঠানের ধরন ও স্বাচ্ছন্দ্যকে গুরুত্ব দিয়ে সাজের পরিকল্পনা করা হয়, যাতে তৈরি হওয়া প্রতিটি লুক আপনার ব্যক্তিত্বের সঙ্গে মানানসই হয়।</p>
        </div>
        <div className="about-values"><span>PERSONAL STYLE</span><span>THOUGHTFUL DETAILS</span><span>CONFIDENT BEAUTY</span></div>
      </section>
    </main>
  );
}
export default About;