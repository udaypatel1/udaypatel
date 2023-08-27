import React from 'react';
import './Handlebar.css';

import linkedinLogo from '../../images/linkedin_logo.png';
import githubLogo from '../../images/github_logo.png';

function Handlebar() {
  return (

      <nav className="handlebar">
        
        <ul className="handle-links">

            <div className="logo">

                <a href="https://www.linkedin.com/in/uday3patel/">
                    <img src={linkedinLogo} alt="linkedinLogo" />
                </a>

                <a href="https://github.com/udaypatel1">
                    <img src={githubLogo} alt="githubLogo" />
                </a>

            </div>

        </ul>
      </nav>
      
  );
}

export default Handlebar;