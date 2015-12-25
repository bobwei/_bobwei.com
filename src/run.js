import React from 'react';
import ReactDOM from 'react-dom';

import { Router, Route } from 'react-router'
import createHashHistory from 'history/lib/createHashHistory'
import createBrowserHistory from 'history/lib/createBrowserHistory';

let history;
if (location.port === '8000' || location.protocol === 'file') {
  history = createHashHistory({
    queryKey: false
  });
} else {
  history = createBrowserHistory();
}

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
