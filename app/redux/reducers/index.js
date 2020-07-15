import { combineReducers } from 'redux';
import { wordReducer } from './word.reducers';
const rootReducer = combineReducers({
  wordReducer,
});

export default rootReducer;
