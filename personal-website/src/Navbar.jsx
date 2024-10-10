import React, { useState } from 'react';
import './Navbar.css'; // Import the CSS file for styling

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
      <ul className={`navbar-links ${isOpen ? 'open' : ''}`}>
        <li><a href="#about-me">About Me</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a href="/Colin_Gould_Resume_Current.pdf">Resume/CV</a></li>
        <li><a href="https://github.com/ColinG03">GitHub</a></li>
        <li><a href="https://www.linkedin.com/in/colin-gould15/">LinkedIn</a></li>

      </ul>
      <div className="navbar-toggle" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </nav>
  );
};

export default Navbar;
