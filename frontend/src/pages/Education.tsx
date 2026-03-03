import React from 'react';
import './Pages.css';

const Education: React.FC = () => {
  const educationList = [
    {
      school: 'Jamia Hamdard University — New Delhi, India',
      degree: 'B.Tech (Electronics and Communication Engineering)',
      year: '2017 - 2021',
      description: 'CGPA: 8.0'
    }
  ];

  return (
    <div className="page-container">
      <header className="section-header">
        <h1>Academic <span className="accent-text">Background</span></h1>
      </header>
      <div className="list-container">
        {educationList.map((edu, index) => (
          <div key={index} className="list-item">
            <div className="list-item-content">
              <h3>{edu.school}</h3>
              <h4>{edu.degree}</h4>
              <p>{edu.description}</p>
            </div>
            <div className="list-item-date">{edu.year}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
