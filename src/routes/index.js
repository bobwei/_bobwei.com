/* global ga */
import React from 'react';
import { Router, Route } from 'react-router';

import App from '../containers/App';
import AboutPage from '../containers/AboutPage';
import ContactPage from '../containers/ContactPage';


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
        <Route path="contact" components={{ main: ContactPage }} />
      </Route>
    </Router>
  );
}
