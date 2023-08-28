import { Link } from 'react-router-dom';
import React from 'react';
import './Navbar.css';

function Navbar() {
  return (

      <nav className="navbar">
        
        <ul className="nav-links">
          <li><Link to="/" className="poppins-regular">Home</Link></li>
          <li><Link to="/about" className="poppins-regular">About</Link></li>
          <li><Link to="/resume" className="poppins-regular">Resume</Link></li>
          <li><Link to="/contact" className="poppins-regular">Contact</Link></li>
        </ul>
      </nav>
      
  );
}

export default Navbar;