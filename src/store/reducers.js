import { combineReducers } from 'redux';
import {router} from 'redux-ui-router';

import basicFieldTypes from './basic-field-type/reducers';

import forms from './forms/reducers';
import user from './user/reducers';
import fields from './fields/reducers';

export default combineReducers({
  router,
  user,
  forms,
  fields,
  basicFieldTypes 
});