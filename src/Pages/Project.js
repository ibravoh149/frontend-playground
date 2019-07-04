import React from 'react';
// import '../App.css';

import { Header } from '../Component/Header'

import Project from '../Container/Project'

function ProjectPage() {
  return (
    <div className="App">
      <Header />
      <div style={{padding:"10px"}}>
        <Project />
      </div>
    </div>
  );
}

export default ProjectPage;
