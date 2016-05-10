import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { routerMiddleware } from 'react-router-redux';

import rootReducer from '../reducers';


export default function configureStore(initialState) {
  let middlewares = [ thunkMiddleware ];
  if (process.env.BROWSER) {
    middlewares = [routerMiddleware(history), ...middlewares];
  }
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(...middlewares)
  );
}
