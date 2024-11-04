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
        <a href="/">
          <h1>Colin Gould</h1>
        </a>
      </div>
      {/* <ul className={`navbar-links ${isOpen ? 'open' : ''}`}>
        <div className='link-container'><li><a href="/about-me">About Me</a></li></div>
        <div className='link-container'><li><a href="/projects">Projects</a></li></div>

      </ul> */}
      {/* {!isOpen && <ul className="navbar-links">
        <div className='link-container'><li><a href="/about-me">About Me</a></li></div>
        <div className='link-container'><li><a href="/projects">Projects</a></li></div>

      </ul>}
      {isOpen && <div className='navbar-links open'>
          <div className='link-container'><li><a href="/about-me">About Me</a></li></div>
          <div className='link-container'><li><a href="/projects">Projects</a></li></div>
        </div>} */}
      <div className='navbar-container'>
        <div className={`navbar-links ${isOpen ? 'open' : ''}`}>
        <div className="link-container">
            <li><a href="/">Home</a></li>
          </div>
          <div className="link-container">
            <li><a href="/about-me">About Me</a></li>
          </div>
          <div className="link-container">
            <li><a href="/projects">Projects</a></li>
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
