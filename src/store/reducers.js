import { combineReducers } from 'redux';
<<<<<<< HEAD
// import userReducer from './user/reducer';
// import app from './app/reducers';
import fieldTypes from './field-type/reducers';
import user from './user/reducers';

export default combineReducers({
  // app,
  fieldTypes,
  user 
=======
import {router} from 'redux-ui-router';

import basicFieldTypes from './basic-field-type/reducers';

import forms from './forms/reducers';
import user from './user/reducers';

export default combineReducers({
  router,
  user,
  forms,
  basicFieldTypes 
>>>>>>> 22b3ffb0f696cc9989cc0fc3e526d42ef0807e65
});