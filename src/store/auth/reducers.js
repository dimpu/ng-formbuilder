import { handleActions } from 'redux-actions';
import Immutable, { fromJS } from 'immutable';
import * as constants from './constants';

const INITIAL_STATE = fromJS({
    authorizing: false,
    authorized: false,
    userEmail: null,
    userDisplayName: null
});

export default handleActions({
    [constants.USER_LOGIN]: (state, action) => state,
    [constants.USER_START_AUTHORIZING]: (state, action)=> state.set('authorizing', true),
    [constants.USER_AUTHORIZED]: (state, action) =>  state.set('authorized',true).set('authorizing', false),
    [constants.SET_USER_EMAIL]: (state, action) => state.set('userEmail', action.payload),
    [constants.SET_USER_DISPLAY_NAME]: (state, action) => state.set('userDisplayName', action.payload)
}, INITIAL_STATE);
