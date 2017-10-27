import { createActions } from 'redux-actions';
import * as constants from './constants';

export default createActions({}, 
    constants.SET_USER_NAME,
    constants.USER_AUTHORIZED,
    constants.USER_START_AUTHORIZING
);