import { combineReducers } from 'redux';
import {router} from 'redux-ui-router';

import basicFieldTypes from './basic-field-type/reducers';

import app from './app/reducers';
import forms from './forms/reducers';
import auth from './auth/reducers';
import fields from './fields/reducers';

export default combineReducers({
  router,

  app,
  auth,
  forms,
  fields,
  basicFieldTypes 
});
