import {
    createSelector
} from 'reselect';
import {
    Map
} from 'immutable';

const formSelector = state => state.form
// function which we will use to write our select logic

// const getForms = (forms) => forms;

const getForms = createSelector(
    formSelector,
    forms => forms
)

export default {
    getForms: getForms
}
