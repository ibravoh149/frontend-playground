import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Home from "./Pages/Home";
import Project from "./Pages/Project";

import Goal from "./Pages/Goal";

const Routes = () => (
  <div>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/home" component={Home} />
      <Route path="/project" component={Project} />
      <Route path="/goal" component={Goal} />
      <Redirect to="/" />
    </Switch>
  </div>
);

export default Routes;
