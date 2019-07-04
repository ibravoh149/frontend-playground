import React from 'react';
// import '../App.css';

import { Header } from '../Component/Header'

import Home from '../Container/Home'

function HomePage() {
  return (
    <div className="App">
      <Header />
      <div style={{padding:"10px"}}>
        <Home />
      </div>
    </div>
  );
}

export default HomePage;
