import React from 'react';
import './Pages.css';

const Home: React.FC = () => {
  return (
    <div className="page-container">
      <div className="hero-section">
        <div className="hero-left">
          <div className="profile-card">
            <div className="profile-image">
              <img src="/Sawad_files/w2hyXovpoCcfHZkjR4Hmr53RA5o.jpg" alt="Profile" />
            </div>
            <h1>Aaabad Ahmed</h1>
            <p className="bio">A Software Engineer who has developed countless innovative solutions.</p>
            <div className="social-links">
               <a href="https://dribbble.com" target="_blank" rel="noreferrer" className="social-icon">
                 <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32"></path></svg>
               </a>
               <a href="https://twitter.com" target="_blank" rel="noreferrer" className="social-icon">
                 <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
               </a>
               <a href="https://instagram.com" target="_blank" rel="noreferrer" className="social-icon">
                 <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
               </a>
            </div>
          </div>
        </div>
        <div className="hero-right">
          <h1 className="main-title">
            SOFTWARE <span className="accent-text">ENGINEER</span>
          </h1>
          <p className="description">
            Passionate about creating intuitive and engaging user experiences. 
            Specialize in transforming ideas into beautifully crafted products.
          </p>
          
          <div className="stats-grid">
            <div className="stat-item">
              <h2>+12</h2>
              <p>YEARS OF EXPERIENCE</p>
            </div>
            <div className="stat-item">
              <h2>+46</h2>
              <p>PROJECTS COMPLETED</p>
            </div>
            <div className="stat-item">
              <h2>+20</h2>
              <p>WORLDWIDE CLIENTS</p>
            </div>
          </div>

          <div className="hero-cards">
            <div className="feature-card orange">
              <h3>DYNAMIC ANIMATION, MOTION DESIGN</h3>
            </div>
            <div className="feature-card green">
              <h3>FRAMER, FIGMA, WORDPRESS, REACTJS</h3>
            </div>
          </div>
        </div>
      </div>

      <div className="contact-section">
        <header className="section-header">
          <h1>LET'S WORK <span className="accent-text">TOGETHER</span></h1>
        </header>
        <div className="contact-container">
          <form className="contact-form">
            <div className="form-row">
              <div className="form-group">
                <label>Name</label>
                <input type="text" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input type="email" placeholder="Your@email.com" required />
              </div>
            </div>
            <div className="form-group">
              <label>Budget</label>
              <select required>
                <option value="" disabled selected>Select...</option>
                <option value="<$3k">&lt;$3k</option>
                <option value="$3k - $5k">$3k - $5k</option>
                <option value="$5k - $10k">$5k - $10k</option>
                <option value=">$10k">&gt;$10k</option>
              </select>
            </div>
            <div className="form-group">
              <label>Message</label>
              <textarea placeholder="Message" required></textarea>
            </div>
            <button type="submit" className="submit-btn">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Home;
