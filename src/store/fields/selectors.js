import { createSelector } from 'reselect';
import { Map } from 'immutable';

const fields = state => state.fields
const getFields = createSelector([fields], fields => fields)

export default {
    getFields
}
