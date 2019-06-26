import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Header } from './Component'

import Project from './Container/Project'

function App() {
  return (
    <div className="App">
      <Header />
      <div style={{padding:"34px"}}>
        <Project />
      </div>
    </div>
  );
}

export default App;
