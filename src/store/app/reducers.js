import { handleActions } from 'redux-actions';
import {Map} from 'immutable';

import * as constants from './constants';
import * as fieldConstants from '../fields/constants';
import * as formConstants from '../forms/constants';


const INITIAL_STATE = Map({
    loggedInUserEmail: null,
    selectedField : null,
    selectedFiledIndex: 0,
    selectedForm: null,
    selectedFormIndex : 0
});

export default handleActions({
    [fieldConstants.FIELD_ADDED]: (state, action) => {

    },
    [constants.SET_LOGGED_IN_USER_EMAIL]: (state, action) => {
        return state.set('loggedInUserEmail', action.payload);
    }
},INITIAL_STATE);
