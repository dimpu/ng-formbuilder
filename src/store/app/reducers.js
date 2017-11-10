import { handleActions } from 'redux-actions';
import { Map } from 'immutable';

import * as constants from './constants';
import * as fieldConstants from '../fields/constants';
import * as formConstants from '../forms/constants';
import * as networkConstants from '../network/constants';

const INITIAL_STATE = Map({
    loggedInUserEmail: null,
    selectedField : null,
    selectedFiledIndex: 0,
    selectedForm: null,
    selectedFormId : null,
    networkFetching: false,
    networkFetchComplete: false,
});

export default handleActions({
    [fieldConstants.FIELD_SELECT]: (state, action) => state.set('selectedField',action.payload), 
    [fieldConstants.SET_FORM_ID]: (state, action) => state.set('selectedFormId', action.payload),
    [constants.SET_LOGGED_IN_USER_EMAIL]: (state, action) => state.set('loggedInUserEmail', action.payload),
    [networkConstants.NETWORK_FETCHING]: (state, action) => state.set('networkFetching', true),
    [networkConstants.NETWORK_FETCH_COMPLETE]: (state, action) => state.set('networkFetchComplete', true).set('networkFetching', false)
},INITIAL_STATE);
