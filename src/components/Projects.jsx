import React from 'react';
import './Projects.css';

const projects = [
  {
    title: "Loan & Insurance Analyzer",
    description: "An AI-powered tool that analyzes long loan and insurance documents. It helps users identify hidden traps and extracts key information from 20+ page documents instantly.",
    tech: ["React", "AI Analysis", "Document Processing", "Vercel"],
    github: "https://github.com/amulya62",
    external: "https://loan-application-psi-brown.vercel.app/",
    featured: true
  },
  {
    title: "Pharmacy Management App",
    description: "A comprehensive full-stack application for managing pharmacy operations. Developed the user interface, robust backend APIs, and efficient modules for inventory and order tracking.",
    tech: ["Frontend", "Backend APIs", "UI/UX", "Database"],
    github: "https://github.com/amulya62",
    featured: true
  },
  {
    title: "Health Care App",
    description: "A dedicated patient record and health tracking application. Built with Java and MySQL, featuring a comprehensive dashboard integrated with Firebase for real-time capabilities.",
    tech: ["Java", "MySQL", "Firebase", "Dashboard UI"],
    github: "https://github.com/amulya62",
    featured: true
  }
];

const Projects = () => {
  return (
    <section id="projects" className="section">
      <h2 className="section-title" style={{marginBottom: '1rem'}}>Some Things I've Built</h2>
      <p style={{textAlign: 'center', marginBottom: '3rem'}}>
        Check out more of my code on <a href="https://github.com/amulya62" target="_blank" rel="noreferrer" style={{textDecoration: 'underline'}}>GitHub</a>.
      </p>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card glass-panel" key={index}>
            <div className="project-top">
              <div className="folder-icon">
                <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="var(--accent-color)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="feather feather-folder">
                  <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                </svg>
              </div>
              <div className="project-links">
                <a href={project.github} target="_blank" rel="noreferrer" aria-label="GitHub Link">
                  <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                </a>
                {project.external && (
                  <a href={project.external} target="_blank" rel="noreferrer" aria-label="External Link">
                    <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-external-link">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                  </a>
                )}
              </div>
            </div>
            <h3 className="project-title">{project.title}</h3>
            <div className="project-description">
              <p>{project.description}</p>
            </div>
            <ul className="project-tech-list">
              {project.tech.map((techItem, i) => (
                <li key={i}>{techItem}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
