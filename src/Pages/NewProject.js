import React from "react";

import { Header } from "../Component/Header";

import NewProject from "../Component/Project/NewProject";

function NewProjectC() {
  return (
    <div className="App">
      <Header />
      <div style={{ padding: "10px" }}>
        <NewProject />
      </div>
    </div>
  );
}

export default NewProjectC;
