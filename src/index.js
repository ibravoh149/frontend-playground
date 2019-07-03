import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from "./App";

import { BrowserRouter as Router, Route } from "react-router-dom";
import Routes from "./router";

const render = Component => {
  ReactDOM.render(
    <Router>
      <Routes />
    </Router>,
    document.getElementById("root")
  );
};

render(Router);

if (module.hot) {
  module.hot.accept("./router", () => {
    const NextApp = require("./router").default;
    render(NextApp);
  });
}
