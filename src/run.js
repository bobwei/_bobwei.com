/* global ga */
if (process.env.BROWSER) {
  require('normalize.css');
  require('./styles/App.scss');
}

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { browserHistory, hashHistory } from 'react-router';
import './utils/react-fastclick';

import Parse from 'parse';
Parse.initialize(
  process.env.PARSE_APPLICATION_ID,
  process.env.PARSE_JAVASCRIPT_KEY
);

window.fbAsyncInit = function() {
  Parse.FacebookUtils.init({
    appId: process.env.FACEBOOK_APP_ID,
    cookie: true,
    version: 'v2.5'
  });
  window.isFBInit = true;
};

ga('create', process.env.GOOGLE_ANALYTICS_ID, 'auto');
ga('send', 'pageview');

import createRoutes from './routes/index';
import configureStore from './stores/configureStore';

let history;
if (location.port === '8000' || location.protocol === 'file:') {
  history = hashHistory;
} else {
  history = browserHistory;
}
const routes = createRoutes(history);
const store = configureStore(undefined, history);

ReactDOM.render(
  <Provider store={store}>
    {routes}
  </Provider>,
  document.getElementById('app')
);
