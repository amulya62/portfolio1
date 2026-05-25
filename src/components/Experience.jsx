import React from 'react';
import './Experience.css';

const experiences = [
  {
    role: "Account Executive Intern (Paid)",
    company: "Grow Your Staff",
    duration: "Recent",
    details: [
      "Managed client communication, follow-ups, and CRM updates.",
      "Supported lead generation and onboarding coordination."
    ]
  },
  {
    role: "Business Development Intern",
    company: "Eve Paper Company",
    duration: "3 Months",
    details: [
      "Conducted market research, outreach, and provided documentation support."
    ]
  },
  {
    role: "Cyber Security Intern",
    company: "CodeAlpha",
    duration: "1 Month",
    details: [
      "Performed vulnerability scanning, basic penetration testing tasks, and report documentation."
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="section">
      <h2 className="section-title">Where I've Worked</h2>
      <div className="experience-container">
        {experiences.map((exp, index) => (
          <div className="experience-card glass-panel" key={index}>
            <div className="experience-header">
              <h3>{exp.role}</h3>
              <span className="duration">{exp.duration}</span>
            </div>
            <h4 className="company">@ {exp.company}</h4>
            <ul className="experience-details">
              {exp.details.map((detail, idx) => (
                <li key={idx}>{detail}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
