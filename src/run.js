import ReactDOM from 'react-dom';

import { browserHistory, hashHistory } from 'react-router';

let history;
if (location.port === '8000' || location.protocol === 'file:') {
  history = hashHistory;
} else {
  history = browserHistory;
}

import createRoutes from './routes/index';
let routes = createRoutes(history);

ReactDOM.render(
  routes,
  document.getElementById('app')
);
