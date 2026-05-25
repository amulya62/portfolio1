import React from 'react';
import './Certifications.css';

const certifications = [
  { name: "TechA Python Developer Certification", issuer: "Infosys Springboard" },
  { name: "Introduction to Data Analytics", issuer: "IBM (Coursera)" },
  { name: "Generative AI Workshop", issuer: "NxtWave" },
  { name: "Exploring Smart Cities (Distinction)", issuer: "iSTEP & University of Melbourne" },
  { name: "Data Science, AI & Cybersecurity Masterclass", issuer: "iSTEP & Deakin University" },
  { name: "Operating System Fundamentals", issuer: "Akamai" },
  { name: "The Friday Hustle Sprint 1 (Aptitude, Coding, DSA)", issuer: "PESCE" },
  { name: "Tata Crucible Campus Quiz - Prelims 1", issuer: "Tata" },
  { name: "ExcelR Internship Certificate", issuer: "ExcelR" }
];

const Certifications = () => {
  return (
    <section id="certifications" className="section">
      <h2 className="section-title">Certifications & Achievements</h2>
      <div className="certifications-grid">
        {certifications.map((cert, index) => (
          <div className="cert-card glass-panel" key={index}>
            <div className="cert-icon">
              <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="var(--accent-color)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-award">
                <circle cx="12" cy="8" r="7"></circle>
                <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
              </svg>
            </div>
            <div className="cert-content">
              <h3>{cert.name}</h3>
              <p>{cert.issuer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
