import React from 'react';
import './Navbar.css';
import logoImage from '../../images/letterLogo.png'
import logoImageClear from '../../images/letterLogoClear.png'

function Navbar() {
  return (

      <nav className="navbar">

        <div className="logo">
          <img src={logoImageClear} alt="Logo" />
        </div>
        
        <ul className="nav-links">
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Resume</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>

  
      
  );
}

export default Navbar;