import { combineReducers } from 'redux';

/* Reducers */
import { reducer as mainReducer } from '../ducks';

const appReducer = combineReducers({
  app: mainReducer,
});

export default appReducer;