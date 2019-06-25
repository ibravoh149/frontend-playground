import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Header } from './Component/Header'

import Project from './Container/Project'

function App() {
  return (
    <div className="App">
      <Header />
      <Project />
    </div>
  );
}

export default App;
