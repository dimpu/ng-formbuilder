import { handleActions } from 'redux-actions';
import Immutable, { Map, List, Set }  from 'immutable';
import * as actions from './actions';

import * as constants from './constants';

const INITIAL_STATE = List();


export default handleActions({
    [constants.FORMS_FETCH_COMPLETE]: (state, action) => {
        return state.concat(action.payload);
    },
    [constants.FORM_CREATED]: (state, action) => {
        state.push(action.payload);
        return state;
    },
    [constants.FORM_DELETE_COMPLETE]: (state, action) => {
        console.log(state);
        return state.delete(parseInt(action.payload)); 
    },
    [constants.SELECT_FIELD]: (state, action) => {
        return state;
    },
    [constants.SELECT_FORM] : (state, action) => {
        
    }
}, INITIAL_STATE);


