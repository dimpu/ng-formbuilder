import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';
import Immutable, { fromJS, Set } from 'immutable';

import  * as constants from './constants';


const initialState = Immutable.fromJS({
    name: '',
    authorizing: false,
    authorized: false
});


export default handleActions({
    [constants.SET_USER_NAME]:((state,payload)=> state.set('name', payload.name)),
    [constants.USER_START_AUTHORIZING]: (state, action)=> state.set('authorizing', true),
    [constants.USER_AUTHORIZED]: (state,action) =>  state.set('authorized',true).set('authorizing', false)
},initialState);