import { createActions, createAction } from 'redux-actions';
import * as constants from './constants';
import * as api from '../utils/webapi';

let actions = createActions({}, 
    ...Object.values(constants)
);

export default actions;