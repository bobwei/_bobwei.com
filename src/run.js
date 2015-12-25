import React from 'react';
import ReactDOM from 'react-dom';
import MainPage from './containers/MainPage';

import { Router, Route } from 'react-router'
import createHashHistory from 'history/lib/createHashHistory'
const history = createHashHistory({
  queryKey: false
});

const routes = (
  <Router history={history}>
    <Route path="/" component={MainPage} />
  </Router>
);

ReactDOM.render(
  routes,
  document.getElementById('app')
);
