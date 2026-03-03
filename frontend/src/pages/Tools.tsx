import React from 'react';
import './Pages.css';

const Tools: React.FC = () => {
  const categories = [
    {
      name: 'Core Languages',
      tools: ['Java 11/17', 'SQL']
    },
    {
      name: 'Backend Frameworks',
      tools: ['Spring Boot', 'Hibernate', 'JUnit', 'Mockito']
    },
    {
      name: 'Frontend Frameworks',
      tools: ['React', 'HTML/CSS', 'JavaScript']
    },
    {
      name: 'Databases & Message Brokers',
      tools: ['PostgreSQL', 'MySQL', 'Redis', 'Apache Kafka']
    },
    {
      name: 'DevOps & Tools',
      tools: ['Docker', 'Kubernetes', 'AWS', 'Git', 'Jenkins']
    }
  ];

  return (
    <div className="page-container">
      <header className="section-header">
        <h1>Technology <span className="accent-text">Stack</span></h1>
      </header>

      {categories.map((cat, index) => (
        <div key={index} className="tools-section">
          <h2>{cat.name}</h2>
          <div className="tools-grid">
            {cat.tools.map(tool => (
              <div key={tool} className="tool-item">
                {tool}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Tools;
