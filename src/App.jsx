import React from "react";
import Home from "./components/Bg-home";
import Nav from "./components/Nav";
import "./App.css";
import "./reset.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <Nav />
        </div>
        <div>
          <Home />
        </div>
      </header>
    </div>
  );
}

export default App;
