import { createSelector } from 'reselect';
import { Map } from 'immutable';

const forms = state => state.forms;

// function which we will use to write our select logic
const getForms = (forms) => forms;

export default {
  getForms: createSelector(
      forms,
      getForms // last arugment is function
    ) 
}