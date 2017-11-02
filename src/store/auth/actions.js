import { createActions, createAction } from 'redux-actions';
import * as constants from './constants';

import firebase from '../../config';
import userActions from '../user/actions';
import { router, stateGo, stateReload, stateTransitionTo } from 'redux-ui-router';

import formActions from '../forms/actions';
import * as webapi from "../utils/webapi";

const login = () => {
    return (dispatch) => {
        dispatch({type: 'LOGIN'});
        dispatch(userActions.userStartAuthorizing());
        webapi.logIn().then((data)=>{
            console.log(data);
            dispatch(userActions.userAuthorized());
            dispatch(formActions.fetchForms(data.user.uid));
            dispatch(stateGo('forms', {}));
        });
    }
}

let actions = createActions({});
actions.login = login;

// let actions = createAction('LOGIN',webapi.logIn);

// actions.login = () => {
//     return webapi.logIn.then((data)=>{
//         console.log(data);
//     });
// }

export default actions;

