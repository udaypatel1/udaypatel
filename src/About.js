
import React from 'react';
import './About.css'
import Navbar from './components/Navbar/Navbar';

function AboutPage() {
    return (

        <div className="page">
            <header className="header">
                <Navbar />
            </header>
                <main className="main-content">
                    <section className="section">
                        <h3>Section 1</h3>
                        <p>Content here...</p>
                    </section>
                    <section className="section">
                        <h2>Section 2</h2>
                        <p>More content...</p>
                    </section>
                </main>
            <footer className="footer">Footer</footer>
        </div>
        
    );
  }
  
  export default AboutPage;