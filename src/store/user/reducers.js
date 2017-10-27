import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';
import Immutable, { fromJS, Set } from 'immutable';

<<<<<<< HEAD
import * as constants from './constants';

const initialState = Immutable.fromJS({
  forms: Set()
=======
import  * as constants from './constants';


const initialState = Immutable.fromJS({
    name: '',
    authorizing: false,
    authorized: false
>>>>>>> 22b3ffb0f696cc9989cc0fc3e526d42ef0807e65
});


export default handleActions({
<<<<<<< HEAD
  [constants.UPDATE_USER_FORMS]: (state, action) =>
  state.update('forms', forms => forms.concat(action.payload)),

  [constants.DELETE_USER_FORMS]: (state, action) =>
  state.update('forms', forms => forms.delete(parseInt(action.payload)))

=======
    [constants.SET_USER_NAME]:((state,payload)=> state.set('name', payload.name)),
    [constants.USER_START_AUTHORIZING]: (state, action)=> state.set('authorizing', true),
    [constants.USER_AUTHORIZED]: (state,action) =>  state.set('authorized',true).set('authorizing', false)
>>>>>>> 22b3ffb0f696cc9989cc0fc3e526d42ef0807e65
},initialState);