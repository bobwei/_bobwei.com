import React from 'react';
import { Router, Route } from 'react-router';

import MainPage from '../containers/MainPage';


export default function(history) {
  return (
    <Router history={history}>
      <Route path="/" component={MainPage} />
    </Router>
  );
}
