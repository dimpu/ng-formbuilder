import { handleActions } from 'redux-actions';
import Immutable from 'immutable';
import * as constants from './constants';

const INITIAL_STATE = Immutable.fromJS([]);

export default handleActions({
    [constants.LOAD_ALL_FORMS]: (state, action) => state.forms
}, INITIAL_STATE);


