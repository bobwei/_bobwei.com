import React from 'react';
import ReactDOM from 'react-dom';

import { Router, Route } from 'react-router'
import createHashHistory from 'history/lib/createHashHistory'
const history = createHashHistory({
  queryKey: false
});

import MainPage from './containers/MainPage';
import PortfolioPage from './containers/PortfolioPage';


const routes = (
  <Router history={history}>
    <Route path="/" component={MainPage} />
    <Route path="/portfolio" component={PortfolioPage} />
  </Router>
);

ReactDOM.render(
  routes,
  document.getElementById('app')
);
