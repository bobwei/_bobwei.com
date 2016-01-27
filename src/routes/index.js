/* global ga */
import React from 'react';
import { Router, Route } from 'react-router';

import App from '../containers/App';
import AboutPage from '../containers/AboutPage';


export default function(history) {
  return (
    <Router
      history={history}
      onUpdate={() => {
        ga('send', 'pageview', {
          location: window.location.href
        });
      }}
    >
      <Route path="/" component={App}>
        <Route path="about" components={{ main: AboutPage }} />
      </Route>
    </Router>
  );
}
