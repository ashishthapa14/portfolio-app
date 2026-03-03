import React from 'react';
import './Pages.css';

const Experience: React.FC = () => {
  const experiences = [
    {
      company: 'PixelForge Studios',
      role: 'Senior Software Engineer',
      period: 'Jan 2020 - Present',
      description: 'Led the design team in creating user-centric mobile and web applications, improving the user experience and increasing user engagement.'
    },
    {
      company: 'BlueWave Innovators',
      role: 'Software Engineer',
      period: 'Jun 2017 - Dec 2019',
      description: 'Developed and implemented design strategies for new product lines, collaborated closely with engineers and product managers.'
    },
    {
      company: 'TrendCraft Solutions',
      role: 'Junior Developer',
      period: 'Mar 2015 - May 2017',
      description: 'Designed user interfaces for e-commerce platforms, focusing on enhancing usability and visual appeal.'
    }
  ];

  return (
    <div className="page-container">
      <header className="section-header">
        <h1>12 YEARS OF <span className="accent-text">EXPERIENCE</span></h1>
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
