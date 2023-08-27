import React from 'react';
import './Navbar.css';

function Navbar() {
  return (

      <nav className="navbar">
        
        <ul className="nav-links">
          <li><a href="#" className="fontify">About</a></li>
          <li><a href="#" className="fontify">Resume</a></li>
          <li><a href="#" className="fontify">Contact</a></li>
        </ul>
      </nav>
      
  );
}

export default Navbar;