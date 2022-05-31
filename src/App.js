import React from 'react';
import './App.css';
import Discover from './components/Discover.js';
//import Footer from './components/Footer.js';
import Home from './components/Home.js';
import Navbar from './components/Navbar.js'

function App() {
  return(
      <div>
        <Navbar />
        <Discover />
      </div>
   
  );
}
     
  
export default App;
