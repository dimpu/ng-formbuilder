import { handleActions } from 'redux-actions';
import Immutable from 'immutable';
import * as constants from './constants';

const INITIAL_STATE = Immutable.fromJS();

export default handleActions({
    [constants.USER_LOGIN]: (state, action) => state,
}, INITIAL_STATE);
