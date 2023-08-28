
import React from 'react';
import './About.css'
import Navbar from './components/Navbar/Navbar';

function AboutPage() {
    return (

        <div className="About-body">

            <div className="About-header">

                <Navbar class="about-nav" />
                <h1 className="bottom-line">Hi! My name is <span class="orangify">Uday</span></h1>

                <h2><span class="orangify">. . .</span> this page is still in <span class="orangify">development</span>. Thanks for your patience!</h2>

            </div>
        </div>

        
    );
  }
  
  export default AboutPage;