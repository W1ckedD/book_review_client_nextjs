import { combineReducers } from 'redux';
import statusReducer from './statusReducer';
import bookReducer from './bookReducer';

export default combineReducers({
  status: statusReducer,
  books: bookReducer,
});