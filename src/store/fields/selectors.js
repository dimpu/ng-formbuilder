import { createSelector } from 'reselect';
import { Map } from 'immutable';

const fields = state => state.fields;
const formId = state => state.app.get('selectedFormId')

const getFields = createSelector([fields,formId], 
    (fields,formId) => { 
       
    return fields.filter((field) => {
        
        return field.formId ==  formId
    })
    
}
    );

export default {
    getFields
}
