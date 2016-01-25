import React from 'react';
import { Router, Route } from 'react-router';

import MainPage from '../containers/MainPage';


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
    </Router>
  );
}
