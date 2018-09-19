import * as React from 'react';
import { Route, Switch } from 'react-router-dom';

import Boilerplate from './boilerplate/Boilerplate';
import Home from './myuw/home/Home'
import Teaching from './myuw/teaching/Teaching'

const App = () => (
  <Boilerplate>
    <Switch>
      <Route exact={true} path="/" component={Home} />
      <Route path="/teaching" component={Teaching} />
    </Switch>
  </Boilerplate>
);

export default App;
