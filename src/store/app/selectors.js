import { createSelector } from 'reselect';
import { Map } from 'immutable';

import fieldTypeSelector from '../field-type/selectors';

const getFieldTypes = (fieldTypes) => fieldTypes;



export default  createSelector(
    fieldTypeSelector,
    getFieldTypes // last arugment is function
  )
