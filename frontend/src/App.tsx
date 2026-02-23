import React, { useEffect, useState } from 'react';
import './App.css';

interface Project {
  id: number;
  title: string;
  description: string;
  link: string;
  imageUrl: string;
}

function App() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [newProject, setNewProject] = useState({ title: '', description: '', link: '', imageUrl: '' });

  useEffect(() => {
    fetch('/api/projects')
      .then(res => {
        if (!res.ok) {
            throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then(data => setProjects(data))
      .catch(err => console.error('Error fetching projects:', err));
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    fetch('/api/projects', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newProject)
    })
    .then(res => res.json())
    .then(data => {
      setProjects([...projects, data]);
      setNewProject({ title: '', description: '', link: '', imageUrl: '' });
    })
    .catch(err => console.error('Error adding project:', err));
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>My Portfolio</h1>
        <nav>
          <a href="#about">About</a> | 
          <a href="#skills">Skills</a> | 
          <a href="#projects">Projects</a> | 
          <a href="#blog">Blog</a>
        </nav>
      </header>
      
      <main>
        <section id="about">
          <h2>About Me</h2>
          <p>Welcome to my full-stack portfolio application.</p>
        </section>

        <section id="projects">
          <h2>Projects</h2>
          <div className="project-list">
            {projects.length === 0 ? <p>No projects found.</p> : null}
            {projects.map(p => (
              <div key={p.id} className="project-card" style={{border: '1px solid #ccc', margin: '10px', padding: '10px'}}>
                <h3>{p.title}</h3>
                <p>{p.description}</p>
                {p.imageUrl && <img src={p.imageUrl} alt={p.title} width="100" />}
                <br/>
                <a href={p.link} target="_blank" rel="noreferrer">View Project</a>
              </div>
            ))}
          </div>

          <div className="add-project">
            <h3>Add New Project</h3>
            <form onSubmit={handleSubmit} style={{display: 'flex', flexDirection: 'column', maxWidth: '300px', margin: '0 auto'}}>
              <input placeholder="Title" value={newProject.title} onChange={e => setNewProject({...newProject, title: e.target.value})} required style={{marginBottom: '5px'}} />
              <input placeholder="Description" value={newProject.description} onChange={e => setNewProject({...newProject, description: e.target.value})} required style={{marginBottom: '5px'}} />
              <input placeholder="Link" value={newProject.link} onChange={e => setNewProject({...newProject, link: e.target.value})} style={{marginBottom: '5px'}} />
              <input placeholder="Image URL" value={newProject.imageUrl} onChange={e => setNewProject({...newProject, imageUrl: e.target.value})} style={{marginBottom: '5px'}} />
              <button type="submit">Add Project</button>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
