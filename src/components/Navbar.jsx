import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-content">
        <div className="logo">Amulya<span>.</span></div>
        <ul className="nav-links" style={{alignItems: 'center'}}>
          <li><a href="#hero">Home</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#certifications">Certifications</a></li>
          <li><a href="https://linkedin.com/in/amulya-s-1a82b830b" target="_blank" rel="noreferrer">LinkedIn</a></li>
          <li><a href="https://github.com/amulya62" target="_blank" rel="noreferrer">GitHub</a></li>
          <li><a href="mailto:amulyas2242004@gmail.com" style={{color: 'var(--accent-color)', border: '1px solid', padding: '6px 12px', borderRadius: '4px'}}>Hire Me</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
