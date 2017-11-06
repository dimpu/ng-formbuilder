import { handleActions } from 'redux-actions';
import Immutable, { List } from 'immutable';
import actions from './actions';

const INITIAL_STATE = List(); 

export default handleActions({
    [actions.fieldDeleteCompleted]: (state, action) => state.concat(action.payload),
    [actions.fieldAdded]: (state, action) => state.concat(action.payload)
}, INITIAL_STATE);

