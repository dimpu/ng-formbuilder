import { createActions } from 'redux-actions';
import * as constants from './constants';

import firebase from '../../config';
import userActions from '../user/actions';
import { router, stateGo, stateReload, stateTransitionTo } from 'redux-ui-router';


const login = () => {
    // console.log(state);
    return (dispatch) => {
        dispatch(userActions.userStartAuthorizing());
        firebase.auth()
            .signInAnonymously()
            .then((data) => {
                dispatch(userActions.userAuthorized());
                dispatch(stateGo('forms', {}));
                dispatch(fetchForms());
            });
    }
}

let actions = createActions({});
actions.login = login;
export default actions;

