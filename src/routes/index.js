import React from 'react';
import { Router, Route } from 'react-router';

import MainPage from '../containers/MainPage';
import AboutPage from '../containers/AboutPage';


export default function(history) {
  return (
    <Router
      history={history}
      onUpdate={() => {
        /* global ga */
        ga('send', 'pageview', {
          location: window.location.href
        });
      }}
    >
      <Route path="/" component={MainPage} />
      <Route path="/about" component={AboutPage} />
    </Router>
  );
}
