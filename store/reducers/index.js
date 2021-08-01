import { combineReducers } from 'redux';
import statusReducer from './statusReducer';
import bookReducer from './bookReducer';
import authReducer from './authReducer';

export default combineReducers({
  status: statusReducer,
  books: bookReducer,
  auth: authReducer,
});