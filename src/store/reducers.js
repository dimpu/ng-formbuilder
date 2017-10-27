import { combineReducers } from 'redux';
// import userReducer from './user/reducer';
// import app from './app/reducers';
import fieldTypes from './field-type/reducers';
import user from './user/reducers';

export default combineReducers({
  // app,
  fieldTypes,
  user 
});