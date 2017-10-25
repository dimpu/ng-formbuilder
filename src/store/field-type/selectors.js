import { createSelector } from 'reselect';
import { Map } from 'immutable';

const fieldTypes = state => state.fieldTypes;

// function which we will use to write our select logic
const getFieldTypes = (fieldTypes) => fieldTypes;

export default {
  getFieldTypes: createSelector(
      fieldTypes,
      getFieldTypes // last arugment is function
    ) 
}

