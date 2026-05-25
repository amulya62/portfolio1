import React from 'react';
import './Skills.css';

const skills = [
  "Python", "MySQL", "Data Analytics", 
  "Full Stack Basics", "HTML/CSS", "JavaScript", 
  "React", "Excel", "Communication", "Teamwork"
];

const Skills = () => {
  return (
    <section id="skills" className="section">
      <h2 className="section-title" style={{marginBottom: '1rem'}}>My Skills</h2>
      <p style={{textAlign: 'center', marginBottom: '3rem'}}>
        Connect with me on <a href="https://linkedin.com/in/amulya-s-1a82b830b" target="_blank" rel="noreferrer" style={{textDecoration: 'underline'}}>LinkedIn</a> to see my endorsements.
      </p>
      <div className="skills-container glass-panel">
        <ul className="skills-grid">
          {skills.map((skill, index) => (
            <li className="skill-item" key={index}>
              <span className="skill-icon">▹</span>
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Skills;
