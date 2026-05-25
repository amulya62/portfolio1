import React, { useState, useRef, useEffect } from 'react';
import './Hero.css';
import profileImg from '../assets/hero.png';

const Hero = () => {
  const [profileImage, setProfileImage] = useState(profileImg);
  const fileInputRef = useRef(null);

  useEffect(() => {
    try {
      const savedPhoto = localStorage.getItem('profilePhoto');
      if (savedPhoto) {
        setProfileImage(savedPhoto);
      }
    } catch (e) {
      console.warn("localStorage is blocked, cannot load profile photo");
    }
  }, []);

  const handleImageClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
        localStorage.setItem('profilePhoto', reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <section id="hero" className="hero-section">
      <div className="hero-container">
        <div className="hero-content">
        <p className="hero-greeting animate-fade-in">Hi, my name is</p>
        <h1 className="hero-name animate-fade-in" style={{ animationDelay: '0.1s' }}>
          Amulya Shree T S.
        </h1>
        <h2 className="hero-subtitle animate-fade-in" style={{ animationDelay: '0.2s' }}>
          I build things for the web.
        </h2>
        <p className="hero-description animate-fade-in" style={{ animationDelay: '0.3s' }}>
          I'm a Computer Science Engineering student skilled in full-stack development, cyber security, and data analytics. Currently focused on building accessible, human-centered products.
        </p>
        
        <div className="hero-contact animate-fade-in" style={{ animationDelay: '0.35s', marginBottom: '30px', color: 'var(--text-main)' }}>
          <p style={{ margin: '5px 0', display: 'flex', alignItems: 'center', gap: '10px' }}>
             <svg width="18" height="18" fill="none" stroke="var(--accent-color)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
             amulyas2242004@gmail.com
          </p>
          <p style={{ margin: '5px 0', display: 'flex', alignItems: 'center', gap: '10px' }}>
             <svg width="18" height="18" fill="none" stroke="var(--accent-color)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
             +91 9483042445
          </p>
        </div>

        <div className="hero-cta animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <a href="#projects" className="btn btn-primary">Check out my work!</a>
          <a href="mailto:amulyas2242004@gmail.com" className="btn btn-primary hire-me-btn" style={{backgroundColor: '#fff', color: '#0b0c10', borderColor: '#fff'}}>Hire Me</a>
          <a href="https://github.com/amulya62" target="_blank" rel="noreferrer" className="btn btn-outline">GitHub Profile</a>
        </div>
        </div>
        <div className="hero-image-wrapper animate-fade-in" style={{ animationDelay: '0.5s' }}>
          <div className="hero-image-container" onClick={handleImageClick} title="Click to upload your photo">
            <img 
              src={profileImage} 
              alt="Amulya Shree T S" 
              className="hero-image" 
              onError={(e) => { e.target.onerror = null; e.target.src="https://api.dicebear.com/9.x/initials/svg?seed=AS&backgroundColor=0b0c10&textColor=66fcf1" }}
            />
            <div className="upload-overlay">
              <span>Update Photo</span>
            </div>
            <input 
              type="file" 
              ref={fileInputRef} 
              onChange={handleFileChange} 
              style={{ display: 'none' }} 
              accept="image/*"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
