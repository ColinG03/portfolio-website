import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
<nav className="navbar">
      <div className="navbar-logo">
        <h1>Colin Gould</h1>
      </div>
      <div className='navbar-container'>
        <div className={`navbar-links ${isOpen ? 'open' : ''}`}>
          <div className="link-container">
            <li><Link to="/">Home</Link></li>
          </div>
          <div className="link-container">
            <li><Link to="/about-me">About Me</Link></li>
          </div>
          <div className="link-container">
            <li><Link to="/projects">Projects</Link></li>
          </div>
        </div>
      </div>
      <div className="navbar-toggle" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </nav>
  );
};

export default Navbar;
