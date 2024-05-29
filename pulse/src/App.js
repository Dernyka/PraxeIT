import React from 'react';
import Control from './components/control panel/control.js';
import Graph from './components/graph/graph';
import Inputs from './components/inputs/inputs.js';
import './App.css';

const App = () => {
  return (
    <div className="app-container">
      <div className="sidebar">
        <Control />
      </div>
      <div className="main-content">
        <div className="navbar">
          <Graph />
        </div>
        <div className="content">
          <Inputs />
        </div>
      </div>
    </div>
  );
};

export default App;
