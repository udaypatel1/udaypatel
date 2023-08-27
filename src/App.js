import React from 'react';
import Navbar from './components/Navbar/Navbar';
import './components/Navbar/Navbar.css'
import Handlebar from './components/Handles/Handlebar';
import './components/Handles/Handlebar.css'
import './App.css'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './About';
import Resume from './Resume';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/about" Component={About} />
          <Route path="/resume" Component={Resume} />
          <Route path="/" Component={Home} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

function Home() {

  return (

    <div className="App-header">

        <h1 className="poppins-regular">Uday Y. Patel</h1>
        
        <Handlebar />      
        <Navbar />

    </div>
  )
}