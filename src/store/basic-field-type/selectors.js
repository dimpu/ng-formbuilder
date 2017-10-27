import { createSelector } from 'reselect';
import { Map } from 'immutable';

const basicFieldTypes = state => state.basicFieldTypes;

// function which we will use to write our select logic
const getBasicFieldTypes = (basicFieldTypes) => basicFieldTypes;

export default {
  getBasicFieldTypes: createSelector(
      basicFieldTypes,
      getBasicFieldTypes // last arugment is function
    ) 
}

