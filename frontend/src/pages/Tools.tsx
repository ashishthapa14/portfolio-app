import React from 'react';
import './Pages.css';

const Tools: React.FC = () => {
  const categories = [
    {
      name: 'Design',
      tools: ['Figma', 'Adobe XD', 'Sketch', 'Framer']
    },
    {
      name: 'Frontend',
      tools: ['React', 'TypeScript', 'Next.js', 'Redux', 'Tailwind CSS', 'SASS']
    },
    {
      name: 'Backend',
      tools: ['Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'GraphQL', 'Prisma']
    },
    {
      name: 'Others',
      tools: ['Docker', 'AWS', 'Git', 'CI/CD', 'Jest']
    }
  ];

  return (
    <div className="page-container">
      <header className="section-header">
        <h1>Premium <span className="accent-text">Tools</span></h1>
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
