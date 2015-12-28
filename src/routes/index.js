import React from 'react';
import { Router, Route } from 'react-router';

import MainPage from '../containers/MainPage';
import PortfolioPage from '../containers/PortfolioPage';


export default function(history) {
  return (
    <Router history={history}>
      <Route path="/" component={MainPage} />
      <Route path="/portfolio" component={PortfolioPage} />
    </Router>
  );
}
