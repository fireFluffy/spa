// Modules
import { combineReducers } from 'redux';
// Reducers
import mainReducer from '../../reducers';

const rootReducer = combineReducers({
  main: mainReducer,
});

export default rootReducer;
