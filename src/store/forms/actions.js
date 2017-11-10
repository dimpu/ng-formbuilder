import {
    createActions,
    createAction
} from 'redux-actions';
import {
    stateGo
} from 'redux-ui-router';
import uuid from 'uuid';

import * as constants from './constants';
import * as api from '../utils/webapi';
import netWorkActions from '../network/actions';

let actions = createActions({},
    ...Object.values(constants)
);

let fetchForms = (email) => {
    return (dispatch) => {
        dispatch({
            type: constants.FORMS_FETCHING
        });
        dispatch(netWorkActions.networkFetching());
        api.fetchForms(email).then((data) => {
            dispatch(netWorkActions.networkFetchComplete());
            dispatch(actions.formsFetchComplete(data));
        });
    }
};

let createForm = (data) => {
    data.id = uuid();
    return (dispatch) => {
        dispatch({
            type: constants.CREATING_FORM
        });
        dispatch(netWorkActions.networkFetching());
        api.createForm(data).then((res) => {
            dispatch(actions.formCreated(data));
            dispatch(netWorkActions.networkFetchComplete());
            dispatch(stateGo('form-composer', {
                id: data.id
            }));
        })
    }
}

let deleteForm = (form) => {
    return (dispatch) => {
        dispatch(netWorkActions.networkFetching());
        dispatch(actions.deleteingForm());
        api.deleteForm(form).then((res) => {
            dispatch(netWorkActions.networkFetchComplete());
            dispatch(actions.formDeleteComplete(form.id));
        });
    }
}

actions.createForm = createForm;
actions.fetchForms = fetchForms;
actions.deleteForm = deleteForm;


export default actions;
