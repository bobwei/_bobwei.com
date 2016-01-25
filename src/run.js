if (process.env.BROWSER) {
  require('normalize.css');
  require('./styles/App.scss');
}

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { browserHistory, hashHistory } from 'react-router';

import createRoutes from './routes/index';
import configureStore from './stores/configureStore';

let history;
if (location.port === '8000' || location.protocol === 'file:') {
  history = hashHistory;
} else {
  history = browserHistory;
}

let routes = createRoutes(history);
let store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    {routes}
  </Provider>,
  document.getElementById('app')
);
