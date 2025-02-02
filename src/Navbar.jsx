import React, { useState } from 'react';
import './Navbar.css'; // Import the CSS file for styling
import { Link } from 'react-scroll';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a>
          <h1>Colin Gould</h1>
        </a>
      </div>
      <div className='navbar-container'>
        <div className={`navbar-links ${isOpen ? 'open' : ''}`}>
        <div className="link-container">
            {/* <Link to="home" smooth={true} duration={500} offset={-250}>Home</Link> */}
            <li><a href="/portfolio-website/">Home</a></li>
          </div>
          <div className="link-container">
            {/* <Link to="about-me" smooth={true} duration={500} offset={-125}>About Me</Link> */}
            <li><a href="/portfolio-website/about-me">About Me</a></li>
          </div>
          <div className="link-container">
            {/* <Link to="projects" smooth={true} duration={500} >Projects</Link> */}
            <li><a href="/portfolio-website/projects">Projects</a></li>
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
