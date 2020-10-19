import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Details from './pages/Details';
import Favorites from './pages/Favorites';
import Home from './pages/Home';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/favorites" component={Favorites} />
        <Route path="/details" component={Details} />
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
