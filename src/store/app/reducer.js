import { handleActions } from 'redux-actions';
import { Map } from 'immutable';

import * as fieldConstants from '../fields/constants';
import * as formConstants from '../forms/constants';


const INITIAL_STATE = Map({
    selectedField : null,
    selectedFiledIndex: 0,
    selectedForm: null,
    selectedFormIndex : 0
});

export default handleActions({
    [fieldConstants.FIELD_ADD_COMPLETED]: (state, action) => {
        return state.set('selectedField', action.payload);
    },
    [formConstants.FORM_CREATED]: (state, action) => {
        return state.set('selectedForm', action.payload);
    }
},INITIAL_STATE);