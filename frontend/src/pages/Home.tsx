import React from 'react';
import './Pages.css';

const Home: React.FC = () => {
  return (
    <div className="page-container">
      <div className="hero-section">
        <div className="hero-left">
          <div className="profile-card">
            <div className="profile-image">
              <img src="myProfile.png" alt="Profile" />
            </div>
            <h1>Ashish Thapa</h1>
            <p className="bio">A Java Developer with 3+ years of experience building high-quality backend applications using modern Java and Spring Boot.</p>
            <div className="social-links">
              <a href="https://github.com/ashishthapa14" target="_blank" rel="noreferrer" className="social-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
              </a>
              <a href="https://www.linkedin.com/in/analystashish/" target="_blank" rel="noreferrer" className="social-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
              <a href="mailto:thapa.ashishkumar3@gmail.com" target="_blank" rel="noreferrer" className="social-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              </a>
            </div>

            <a href="resume.pdf" download="Ashish_Thapa_Resume.pdf" style={{
              display: 'inline-block',
              marginTop: '1.5rem',
              padding: '0.8rem 1.5rem',
              backgroundColor: 'var(--accent-color, #0056b3)',
              color: 'white',
              textDecoration: 'none',
              borderRadius: '25px',
              fontWeight: '600',
              boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
              transition: 'background-color 0.3s ease'
            }}
              onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#004494'}
              onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'var(--accent-color, #0056b3)'}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                Download CV
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
              </div>
            </a>
          </div>
        </div>
        <div className="hero-right">
          <h1 className="main-title">
            BACKEND <span className="accent-text">JAVA DEVELOPER</span>
          </h1>
          <p className="description">
            Passionate about creating scalable and robust server-side infrastructures.
            Specialize in transforming complex backend logic and data structures into high-performing, secure systems.
          </p>

          <div className="stats-grid">
            <div className="stat-item">
              <h2>3+</h2>
              <p>YEARS OF EXPERIENCE</p>
            </div>
            <div className="stat-item">
              <h2>2</h2>
              <p>COMPANIES WORKED</p>
            </div>
            <div className="stat-item">
              <h2>30+</h2>
              <p>REST APIS DEVELOPED</p>
            </div>
          </div>

          <div className="hero-cards">
            <div className="feature-card orange">
              <h3>REST API DESIGN, MICROSERVICES ARCHITECTURE</h3>
            </div>
            <div className="feature-card green">
              <h3>JAVA 8+, SPRING BOOT, POSTGRESQL, HIBERNATE</h3>
            </div>
          </div>
        </div>
      </div>

      <div className="contact-section" style={{ marginTop: '4rem' }}>
        <header className="section-header">
          <h1>LET'S WORK <span className="accent-text">TOGETHER</span></h1>
        </header>
        <div className="contact-container" style={{ display: 'grid', gridTemplateColumns: 'minmax(300px, 1fr) 2fr', gap: '4rem', alignItems: 'start', padding: '3rem 0', minHeight: '500px' }}>

          {/* Left Side: Contact Information Cards */}
          <div className="contact-info" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <h3 style={{ marginBottom: '1rem', fontSize: '1.2rem' }}>If You Have Any Queries, Please Feel Free to Contact Me</h3>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{ color: 'var(--accent-color, #0056b3)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              </div>
              <div>
                <h4 style={{ margin: 0 }}>Address</h4>
                <p style={{ margin: '0.4rem 0 0 0', opacity: 0.8, fontSize: '0.9rem' }}>Pune, Maharashtra, India</p>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{ color: 'var(--accent-color, #0056b3)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              </div>
              <div>
                <h4 style={{ margin: 0 }}>Mail Us</h4>
                <p style={{ margin: '0.4rem 0 0 0', opacity: 0.8, fontSize: '0.9rem' }}>thapa.ashishkumar3@gmail.com</p>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{ color: 'var(--accent-color, #0056b3)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              </div>
              <div>
                <h4 style={{ margin: 0 }}>Telephone</h4>
                <p style={{ margin: '0.4rem 0 0 0', opacity: 0.8, fontSize: '0.9rem' }}>+91 8447186072</p>
              </div>
            </div>

            {/* Native Map Integration */}
            <div style={{ marginTop: '1rem', width: '100%', height: '200px', borderRadius: '8px', overflow: 'hidden', position: 'relative', border: '1px solid rgba(255,255,255,0.1)' }}>
              <iframe
                title="Pune Location Map"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) brightness(80%) contrast(110%)' }}
                loading="lazy"
                allowFullScreen
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121058.93187091679!2d73.78056541088137!3d18.524766326442654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf2e67461101%3A0x828d43bf9d9ee343!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1689230000000!5m2!1sen!2sin">
              </iframe>
            </div>
          </div>

          {/* Right Side: Contact Form Grid */}
          <form className="contact-form" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div className="form-row" style={{ display: 'flex', gap: '1rem' }}>
              <div className="form-group" style={{ flex: 1 }}>
                <input type="text" placeholder="Your Name" required style={{ width: '100%', padding: '12px', border: '1px solid #ddd', borderRadius: '4px' }} />
              </div>
              <div className="form-group" style={{ flex: 1 }}>
                <input type="email" placeholder="Your Email" required style={{ width: '100%', padding: '12px', border: '1px solid #ddd', borderRadius: '4px' }} />
              </div>
            </div>
            <div className="form-row" style={{ display: 'flex', gap: '1rem' }}>
              <div className="form-group" style={{ flex: 1 }}>
                <input type="tel" placeholder="Mobile" style={{ width: '100%', padding: '12px', border: '1px solid #ddd', borderRadius: '4px' }} />
              </div>
              <div className="form-group" style={{ flex: 1 }}>
                <input type="text" placeholder="Subject" style={{ width: '100%', padding: '12px', border: '1px solid #ddd', borderRadius: '4px' }} />
              </div>
            </div>
            <div className="form-group">
              <textarea placeholder="Leave a message here" required style={{ width: '100%', padding: '12px', border: '1px solid #ddd', borderRadius: '4px', minHeight: '150px', resize: 'vertical' }}></textarea>
            </div>
            <button type="submit" className="submit-btn" style={{ marginTop: '1rem' }}>Send Message</button>
          </form>

        </div>
      </div>
    </div>
  );
};

export default Home;
