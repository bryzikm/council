import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Login from '../src/pages/Login';
import Sessions from '../src/pages/Sessions';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={ Login }/>
        <Route path="/sessions" component={ Sessions }/>
      </Switch>
    </Router>
  )
};

export default App;
