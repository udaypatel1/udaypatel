
import React from 'react';
import './About.css'
import Navbar from './components/Navbar/Navbar';

function AboutPage() {
    return (

        <div className="About-body">

            <div className="About-header">

                <Navbar class="about-nav" />
                <h1 className="bottom-line">Hi! My name is <span class="orangify">Uday</span></h1>

                <h2>I graduated from <span class="orangify">Rutgers University</span> in <span class="orangify">2022</span></h2>
                <h2>I'm currently a <span class="orangify">Software Engineer</span> at <span class="orangify">Guardian Life</span> in <span class="orangify">NYC</span></h2>
                <h2>Feel free to view some of my <span class="orangify">interests</span></h2>
                
            </div>
        </div>

        
    );
  }
  
  export default AboutPage;