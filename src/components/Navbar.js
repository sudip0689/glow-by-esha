import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const links = [['Home', '/'], ['Portfolio', '/portfolio'], ['About', '/about'], ['Services', '/services'], ['Contact', '/contact']];

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={() => setMenuOpen(false)}><span className="logo-monogram">G.</span><span>GLOW BY ESHA<small>MAKEUP ARTISTRY</small></span></Link>
        <button className={'menu-icon ' + (menuOpen ? 'active' : '')} aria-label="Toggle navigation" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}><span></span><span></span></button>
        <ul className={'navbar-menu ' + (menuOpen ? 'active' : '')}>
          {links.map(([label, path]) => <li key={path}><Link className={location.pathname === path ? 'nav-active' : ''} to={path} onClick={() => setMenuOpen(false)}>{label}</Link></li>)}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
