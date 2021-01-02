import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Shop from 'components/Shop';
import NotFound from 'components/NotFound';
import Cart from 'components/Cart';
import Header from 'components/Header';

const Routes = () => {
  return (
    <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Shop} />
          <Route path="/cart" component={Cart} />
          <Route path='*' component={NotFound} />
        </Switch>
    </Router>
  );
}

export default Routes;