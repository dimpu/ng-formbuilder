import { createActions, createAction } from 'redux-actions';
import * as constants from './constants';
import * as appActions from '../app/actions';
import netWorkActions from '../network/actions';

import * as api from '../utils/webapi';

let actions = createActions({},
    ...Object.values(constants)
);

console.log(netWorkActions);

let fetchFields = (formId) => {
    return (dispatch) => {
        dispatch(netWorkActions.networkFetching());
        dispatch(actions.fieldsFetching(formId));
        api.fetchFields(formId).then((data) => {
            dispatch(netWorkActions.networkFetchComplete());
            dispatch(actions.fieldsFetchComplete(data));
        });
    }
};

let addField = (field) => {
    return (dispatch) => {
        dispatch(netWorkActions.networkFetching());

        dispatch(actions.fieldAdding());
        api.addField(field).then((data) => {
            dispatch(netWorkActions.networkFetchComplete());

            dispatch(actions.fieldAdded(field));
        });
    };
};

let updateField = (field) => {
    return (dispatch) => {
        dispatch(netWorkActions.networkFetching());

        dispatch(actions.fieldUpdating(field));
        api.updateField(field).then((data) => {

            dispatch(netWorkActions.networkFetchComplete());

            //dispatch(actions.fieldUpdateCompltete(field));
        });
    }
}

let deleteField = (field) => {
    return (dispatch) => {
        dispatch(netWorkActions.networkFetching());

        dispatch(actions.deletingField(field));
        api.deleteField(field).then((data) => {
            dispatch(netWorkActions.networkFetchComplete());

            // dispatch(actions.completedDeleteField(field));
        });
    }
}

actions.fetchFields = fetchFields;
actions.addField = addField;
actions.updateField = updateField;
actions.deleteField = deleteField;

export default actions;