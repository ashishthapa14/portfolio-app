import React from 'react';
import './Pages.css';

const Experience: React.FC = () => {
  const experiences = [
    {
      company: 'PhiEdge — Pune, India',
      role: 'Java Developer',
      period: 'Sep 2024 - Present',
      description: 'Developing and maintaining scalable backend services using Java and Spring Boot. Designing and implementing REST APIs focusing on performance and maintainability. Optimizing workflows and resolving production issues in Linux environments.'
    },
    {
      company: 'Infosys — Chandigarh, India',
      role: 'System Engineer',
      period: 'Mar 2022 - Apr 2024',
      description: 'Developed enterprise backend services using Java and Spring framework. Implemented REST APIs and optimized SQL queries improving response times. Applied multithreading and collections framework for efficient data processing.'
    }
  ];

  return (
    <div className="page-container">
      <header className="section-header">
        <h1>Professional <span className="accent-text">Experience</span></h1>
      </header>
      <div className="list-container">
        {experiences.map((exp, index) => (
          <div key={index} className="list-item">
            <div className="list-item-content">
              <h3>{exp.company}</h3>
              <h4>{exp.role}</h4>
              <p>{exp.description}</p>
            </div>
            <div className="list-item-date">{exp.period}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
