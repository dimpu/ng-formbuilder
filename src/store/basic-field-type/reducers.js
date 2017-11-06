import { handleActions } from 'redux-actions';
import Immutable from 'immutable';
import * as constants from './constants';
import * as fieldTypes from '../../atoms/fields/field-types';

const INITIAL_STATE = Immutable.fromJS(
  Object.values(fieldTypes)
);




let actions = handleActions({
  [constants.LOAD_FIELD_TYPES]: (state, action) => state.fieldTypes
}, INITIAL_STATE);


export default actions;


