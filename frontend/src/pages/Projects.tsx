import React from 'react';
import './Pages.css';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'ToDo Microservice Application',
      type: 'Backend Services',
      description: 'Microservices-based backend using Java and Spring Boot. Implemented REST APIs structured with clean architecture principles. Applied concurrency and modular design for high scalability.'
    },
    {
      title: 'MyBank Full-Stack Application',
      type: 'Full Stack Service',
      description: 'Developed over 30 REST APIs dedicated to core banking workflows utilizing Spring Boot & MySQL. Secured and optimized DB queries reducing API latencies natively.'
    }
  ];

  return (
    <div className="page-container">
      <header className="section-header">
        <h1>Selected <span className="accent-text">Projects</span></h1>
      </header>
      <div className="list-container">
        {projects.map((project, index) => (
          <div key={index} className="list-item">
            <div className="list-item-content">
              <h3>{project.title}</h3>
              <h4>{project.type}</h4>
              <p>{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
