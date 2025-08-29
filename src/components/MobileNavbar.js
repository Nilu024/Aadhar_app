import React from 'react';
import { NavLink } from 'react-router-dom';
import './MobileNavbar.css';

const MobileNavbar = () => {
  return (
    <nav className="mobile-navbar">
      <NavLink to="/" className="nav-item">
        <span className="icon">🏠</span>
        <span className="label">Home</span>
      </NavLink>
      <NavLink to="/ngos" className="nav-item">
        <span className="icon">📋</span>
        <span className="label">NGOs</span>
      </NavLink>
      <NavLink to="/volunteer" className="nav-item">
        <span className="icon">🤝</span>
        <span className="label">Volunteer</span>
      </NavLink>
      <NavLink to="/profile" className="nav-item">
        <span className="icon">👤</span>
        <span className="label">Profile</span>
      </NavLink>
    </nav>
  );
};

export default MobileNavbar;
