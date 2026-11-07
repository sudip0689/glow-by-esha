import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Services.css';

const services = [
  {
    number: '01',
    title: 'Bridal Makeup',
    tag: 'FOR YOUR WEDDING DAY',
    description: 'বিয়ের দিনের সাজ—আপনার bridal outfit, jewellery, পছন্দের style ও অনুষ্ঠানের mood মাথায় রেখে তৈরি করা হয়। Traditional, elegant বা soft-glam যে look-ই চান, আগে থেকেই কথা বলে আপনার পছন্দ অনুযায়ী সাজ ঠিক করা হবে।',
    details: ['আপনার outfit ও reference photo নিয়ে look discussion', 'Skin-এর সঙ্গে মানানসই base ও complexion finish', 'আপনার পছন্দ অনুযায়ী eye makeup, blush ও lip shade', 'পুরো look-এর final touch ও setting']
  },
  {
    number: '02',
    title: 'Party Makeup',
    tag: 'BIRTHDAY · FAMILY FUNCTION · PARTY',
    description: 'Birthday, anniversary, family অনুষ্ঠান বা party—যে occasion-ই হোক, সাজটা হবে অনুষ্ঠানের সঙ্গে মানানসই এবং আপনার নিজের style-এর মতো। খুব subtle থেকে একটু glamorous look—দুটোই করা যায়।',
    details: ['Occasion ও outfit অনুযায়ী makeup style', 'Natural-looking বা defined base finish', 'Eye ও lip look আপনার পছন্দমতো', 'ফটোগ্রাফিতে সুন্দর দেখায় এমন balanced finish']
  },
  {
    number: '03',
    title: 'Engagement & Occasion',
    tag: 'ENGAGEMENT · RECEPTION · SPECIAL DAY',
    description: 'Engagement, reception, হলুদ বা অন্য কোনও special অনুষ্ঠানের জন্য customised look। Outfit-এর colour, jewellery এবং অনুষ্ঠানের সময়/পরিবেশের সঙ্গে মিলিয়ে সাজের tone বেছে নেওয়া হবে।',
    details: ['আপনার outfit ও jewellery-এর সঙ্গে look coordination', 'আপনার পছন্দমতো soft, classic বা glam finish', 'Eye makeup ও lip colour-এর customised combination', 'শেষে পুরো look একসঙ্গে balance করে নেওয়া']
  },
  {
    number: '04',
    title: 'Soft Glam',
    tag: 'SUBTLE, FRESH & EFFORTLESS',
    description: 'যাঁরা অতিরিক্ত heavy makeup পছন্দ করেন না, তাঁদের জন্য। নিজের features ঢেকে না দিয়ে সুন্দরভাবে ফুটিয়ে তোলাই এই look-এর লক্ষ্য—ছোট অনুষ্ঠান, photoshoot বা নিজের special day-তে মানানসই।',
    details: ['Light-to-medium, skin-like base look', 'Softly defined eyes', 'Fresh blush ও natural-looking lip shade', 'আপনার মুখের গঠন ও পছন্দ অনুযায়ী finishing']
  }
];

function Services() {
  return (
    <main className="services-page">
      <header className="simple-page-head">
        <p className="eyebrow">MAKEUP SERVICES · GLOW BY ESHA</p>
        <h1>Your occasion.<br /><em>Your kind of glow.</em></h1>
        <p>প্রতিটি মানুষের পছন্দ আলাদা, প্রতিটি অনুষ্ঠানের প্রয়োজনও আলাদা। তাই এখানে কোনও fixed look চাপিয়ে দেওয়া হয় না—আপনার outfit, পছন্দ ও occasion বুঝে makeup look তৈরি করা হয়।</p>
      </header>

      <section className="services-intro-note">
        <span className="eyebrow">FIND YOUR LOOK</span>
        <p>আপনি কী ধরনের সাজ চান, reference photo থাকলে সেটিও booking enquiry-তে জানাতে পারেন। কথা বলে আপনার জন্য উপযুক্ত look ঠিক করা হবে।</p>
      </section>

      <section className="service-list" aria-label="Makeup services">
        {services.map(service => (
          <article className="service-detail" key={service.number}>
            <div className="service-detail-top">
              <span className="service-number">{service.number}</span>
              <span className="service-tag">{service.tag}</span>
            </div>
            <h2>{service.title}</h2>
            <p className="service-description">{service.description}</p>
            <div className="service-includes">
              <h3>WHAT WE PLAN TOGETHER</h3>
              <ul>{service.details.map(detail => <li key={detail}>{detail}</li>)}</ul>
            </div>
          </article>
        ))}
      </section>

      <section className="service-experience">
        <p className="eyebrow">A SIMPLE, PERSONAL PROCESS</p>
        <h2>From your idea<br /><em>to your final look.</em></h2>
        <div className="service-steps">
          <article><span>01</span><div><h3>Share your occasion</h3><p>কোন অনুষ্ঠান, কবে এবং কোথায়—booking form-এ details দিন।</p></div></article>
          <article><span>02</span><div><h3>Discuss your look</h3><p>আপনার পছন্দ, outfit ও reference নিয়ে WhatsApp-এ কথা হবে।</p></div></article>
          <article><span>03</span><div><h3>Confirm the booking</h3><p>Availability ও service details কথা বলে নিশ্চিত হওয়ার পর booking final হবে।</p></div></article>
        </div>
        <p className="service-note">Note: Service availability, timing ও package details enquiry করার পর confirm করা হবে।</p>
      </section>

      <div className="services-cta">
        <div><p>Have a look in mind?</p><span>আপনার অনুষ্ঠানের details পাঠান—চলুন আপনার পছন্দের সাজ নিয়ে কথা বলি।</span></div>
        <Link to="/contact" className="button button-dark">Enquire on WhatsApp <span>↗</span></Link>
      </div>
    </main>
  );
}
export default Services;
