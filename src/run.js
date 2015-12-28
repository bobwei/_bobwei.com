import ReactDOM from 'react-dom';

import createHashHistory from 'history/lib/createHashHistory'
import createBrowserHistory from 'history/lib/createBrowserHistory';

let history;
if (location.port === '8000' || location.protocol === 'file') {
  history = createHashHistory({
    queryKey: false
  });
} else {
  history = createBrowserHistory();
}

import createRoutes from './routes/index';
let routes = createRoutes(history);

ReactDOM.render(
  routes,
  document.getElementById('app')
);
