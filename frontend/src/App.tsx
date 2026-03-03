import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import Tools from './pages/Tools';
import Education from './pages/Education';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="nav-container">
          <NavLink to="/" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
            Home
          </NavLink>
          <NavLink to="/projects" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
            Projects
          </NavLink>
          <NavLink to="/experience" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
            Experience
          </NavLink>
          <NavLink to="/tools" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
            Tools
          </NavLink>
          <NavLink to="/education" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
            Education
          </NavLink>
        </nav>

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/tools" element={<Tools />} />
            <Route path="/education" element={<Education />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
