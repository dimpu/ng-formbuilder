import { handleActions } from 'redux-actions';
import * as consts from './constants';
import * as fieldConstants from '../fields/constants';
import * as formConstants from '../forms/constants';


const INITIAL_STATE = Map({
    selectedField : null,
    selectedFiledIndex: 0,
    selectedForm: null,
    selectedFormIndex : 0
});

export default handleActions({
    [fieldConstants.FIELD_ADDED]: (state, action) => {

    }
},INITIAL_STATE);