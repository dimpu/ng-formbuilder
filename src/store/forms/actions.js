import { createActions,createAction } from 'redux-actions';
import * as constants from './constants';
import * as api from '../utils/webapi';
import { stateGo } from 'redux-ui-router';
import uuid  from 'uuid';


let actions = createActions({}, 
    ...Object.values(constants)
);


let fetchForms = (email) => {
    return (dispatch) => {
        dispatch({ type: constants.FORMS_FETCHING});
        api.fetchForms(email).then((data)=>{
            dispatch(actions.formsFetchComplete(data) );
        });
    }
};

let createForm = (data) => {
    data.id = uuid();
    return (dispatch) => {
        dispatch({type: constants.DELETEING_FORM});
        console.log(data);
        api.createForm(data).then((res)=> {
            dispatch(actions.formCreated(data));
            dispatch(stateGo('form-composer', {id: data.id}));
        })
    } 
}

let deleteForm = (formId) => {
    return (dispatch) => {
        dispatch(actions.deleteingForm());
        api.deleteForm(formId).then((res)=>{
            dispatch(actions.formDeleteComplete(formId));
        });
    }
}

actions.createForm = createForm;
actions.fetchForms = fetchForms;
actions.deleteForm = deleteForm;


export default actions;
