import { handleActions } from 'redux-actions';
import Immutable, { Map } from 'immutable';
import actions from './actions';

const INITIAL_STATE = Map(); 


export default handleActions({
    [actions.fieldsFetchComplete]: (state, action) => state.merge(action.payload),
    [actions.fieldDeleteCompleted]: (state, action) => state.concat(action.payload),
    [actions.fieldAdded]: (state, action) => state.set(action.payload.id, action.payload)
}, INITIAL_STATE);

