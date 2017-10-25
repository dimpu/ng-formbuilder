import { handleActions } from 'redux-actions';
import Immutable from 'immutable';
import * as constants from './constants';
import * as fieldTypes from '../../atoms/fields/field-types';

const INITIAL_STATE = Immutable.fromJS(
  [
    ...fieldTypes.input, 
    fieldTypes.checkbox, 
    fieldTypes.radio,
    fieldTypes.textarea, 
    fieldTypes.select
  ]
);

export default handleActions({
    [constants.LOAD_FIELD_TYPES]: (state, action) => state.fieldTypes
}, INITIAL_STATE);


