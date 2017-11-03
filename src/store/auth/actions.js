import { createActions, createAction } from 'redux-actions';
import { router, stateGo, stateReload, stateTransitionTo } from 'redux-ui-router';

import * as constants from './constants';
import firebase from '../../config';
import formActions from '../forms/actions';
import * as webapi from "../utils/webapi";


let actions = createActions({}, ...Object.values(constants));



const login = () => {
    return (dispatch) => {
        dispatch({type: 'LOGIN'});
        dispatch(actions.userAuthorizing());
        webapi.logIn().then((data)=>{
            console.log(data);
            
            dispatch(actions.setUserDisplayName(data.user.displayName));
            dispatch(actions.setUserEmail(data.user.email));
            
            dispatch(actions.userAuthorized());
            dispatch(formActions.fetchForms(data.user.email));
            dispatch(stateGo('forms', {}));
        });
    }
}

actions.login = login;

export default actions;

