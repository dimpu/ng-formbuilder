import { createSelector } from 'reselect';
import { Map } from 'immutable';

const forms = state => state.forms
const getForms = createSelector([forms], forms => forms)

export default {
    getForms
}
