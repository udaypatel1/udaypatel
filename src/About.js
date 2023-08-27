
import React from 'react';
import './About.css'
import Navbar from './components/Navbar/Navbar';

function AboutPage() {
    return (

        <div className="About-body">

            <div className="About-header">

                <Navbar class="about-nav" />
                <h1>Hi! My name is <span class="orangify">Uday</span></h1>

                
            </div>
        </div>

        
    );
  }
  
  export default AboutPage;