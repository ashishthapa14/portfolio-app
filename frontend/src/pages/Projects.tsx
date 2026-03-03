import React from 'react';
import './Pages.css';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'NajmAI',
      type: 'SaaS Framer Template',
      image: '/Sawad_files/4mYEXU91rLBNKIW9k6hZh16l7Q.jpeg'
    },
    {
      title: 'Damas',
      type: 'Free Framer Template',
      image: '/Sawad_files/5Ra4AFZmEJOkMGLAEjkRXt2oqF4.png'
    },
    {
      title: 'Faseelh',
      type: 'Free Framer Template',
      image: '/Sawad_files/GyxvLZ0U5MeFKnTaiObmffY.png'
    }
  ];

  return (
    <div className="page-container">
      <header className="section-header">
        <h1>Recent <span className="accent-text">Projects</span></h1>
      </header>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-image">
              <img src={project.image} alt={project.title} />
            </div>
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.type}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
