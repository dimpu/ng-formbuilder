import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';
import Immutable, { fromJS, Set } from 'immutable';

import * as constants from './constants';

const initialState = Immutable.fromJS({
  forms: Set()
});


export default handleActions({
  [constants.UPDATE_USER_FORMS]: (state, action) =>
  state.update('forms', forms => forms.concat(action.payload)),

  [constants.DELETE_USER_FORMS]: (state, action) =>
  state.update('forms', forms => forms.delete(parseInt(action.payload)))

},initialState);