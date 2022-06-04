import React from 'react';
import './App.css';
import Discover from './components/Discover.js';
import Home from './components/Home.js';
import Navbar from './components/Navbar.js';
import Join from './components/Join.js';

function App() {
  return(
      <>
       <Navbar />
        <Home />
        <Discover /> 
        <Join />
      </>
   
  );
}
     
  
export default App;
