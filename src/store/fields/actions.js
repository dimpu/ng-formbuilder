import { createActions, createAction } from 'redux-actions';
import * as constants from './constants';
import appActions from '../app/actions';
import * as api from '../utils/webapi';

let actions = createActions({}, 
    ...Object.values(constants)
);

let fetchFields = (formId) => {
    return (dispatch) => {
        dispatch(actions.fieldsFetching(formId));
        api.fetchFields(formId).then((data) => {
            dispatch(actions.fieldsFetchComplete(data));
        });
    }
};

let addField = (field) => {
    return (dispatch) => {
       dispatch(actions.fieldAdding());
       api.addField(field).then((data) => {
            dispatch(actions.fieldAdded(field));
       });
    };
};

let updateField = (field) => {
    return (dispatch) => {
        dispatch(actions.fieldUpdating(field));
        api.updateField(field).then((field)=>{
            //dispatch(actions.fieldUpdateCompltete(field));
        });
    }
}

actions.fetchFields = fetchFields;
actions.addField = addField;
actions.updateField = updateField;

export default actions;
