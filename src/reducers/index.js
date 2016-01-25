import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { routeReducer } from 'redux-simple-router'

const rootReducer = combineReducers({
  routing: routeReducer,
  form: formReducer
});

export default rootReducer;
