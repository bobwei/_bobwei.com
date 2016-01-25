import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { syncHistory } from 'redux-simple-router'

import rootReducer from '../reducers';


export default function configureStore(initialState, history) {
  const createStoreWithMiddleware = applyMiddleware(
    thunkMiddleware,
    syncHistory(history)
  )(createStore);
  return createStoreWithMiddleware(rootReducer, initialState);
}
