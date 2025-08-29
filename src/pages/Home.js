import React from 'react';
import './Home.css'; // Optional: for styling

const Home = () => {
  return (
    <div className="home-container">
      <header className="hero-section">
        <h1>🌍 Connect with NGOs That Matter</h1>
        <p>
          Our platform bridges the gap between passionate individuals and impactful NGOs.
          Discover causes, contribute, and collaborate for a better tomorrow.
        </p>
        <a href="/ngos" className="cta-button">Explore NGOs</a>
      </header>

      <section className="features-section">
        <h2>✨ Why Use Our Platform?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <h3>Verified NGOs</h3>
            <p>We list only authentic and registered organizations working across various domains.</p>
          </div>
          <div className="feature-card">
            <h3>Cause-Based Search</h3>
            <p>Find NGOs by categories like education, environment, healthcare, and more.</p>
          </div>
          <div className="feature-card">
            <h3>Volunteer & Donate</h3>
            <p>Get involved through volunteering opportunities or direct donations.</p>
          </div>
        </div>
      </section>

      <section className="about-section">
        <h2>💡 About the Idea</h2>
        <p>
          This platform was born out of the need to make social impact more accessible.
          Whether you're a student, professional, or retiree, there's a cause waiting for your support.
          We aim to empower NGOs with visibility and individuals with purpose.
        </p>
      </section>

      <footer className="footer">
        <p>© {new Date().getFullYear()} NGO Connect. Built with ❤️ to make a difference.</p>
      </footer>
    </div>
  );
};

export default Home;
