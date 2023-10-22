import React from 'react';
// import logo from './logo-cybera.png';
import Home from './components/Bg-home';
import Nav from './components/Nav';
import './App.css';
import "./reset.css"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div id="logo">
        <Nav /> 
        </div>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <Home />
      </header>
    </div>
  );
}

export default App;
