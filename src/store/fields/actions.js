import { createActions, createAction } from 'redux-actions';
import * as constants from './constants';
import * as api from '../utils/webapi';

let actions = createActions({}, 
    ...Object.values(constants)
);

let fetchFields = (formId) => {
    return (dispatch) => {
        dispatch(actions.fetchingFields(formId));
        api.fetchFields(formId).then((data) => {
            dispatch(actions.fetchFieldsComplete(data));
        });
    }
};

let addField = (field) => {
    return (dispatch) => {
       dispatch(actions.fieldAdding());
       api.addField(field).then((data) => {
            dispatch(actions.fieldAdded());
       });
    };
};

actions.fetchFields = fetchFields;
actions.addField = addField;

export default actions;
