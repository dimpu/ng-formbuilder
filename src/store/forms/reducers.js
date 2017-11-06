import { handleActions } from 'redux-actions';
import Immutable, { Map, List, Set }  from 'immutable';
import * as actions from './actions';

import * as constants from './constants';

const INITIAL_STATE = Map({});


export default handleActions({
    [constants.FORMS_FETCH_COMPLETE]: (state, action) => {
        return state.merge(action.payload);
    },
    [constants.FORM_CREATED]: (state, action) => {
        return state.set(action.payload.id, action.payload);
    },
    [constants.FORM_DELETE_COMPLETE]: (state, action) => {
        return state.delete(action.payload); 
    }
}, INITIAL_STATE);


