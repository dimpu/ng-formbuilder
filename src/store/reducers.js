import { combineReducers } from 'redux';
import userReducer from './user/reducer';
import appReducer from './app/reducer';

export default combineReducers({
  app: appReducer,
  user: userReducer
});