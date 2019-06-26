import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';

import Home from './Pages/Home';
import Project from './Pages/Project'

const Routes = () => (
  <div>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/home" component={Home} />
      <Route path="/project" component={Project} />
      <Redirect to="/" />
    </Switch>
  </div>
);

export default Routes;