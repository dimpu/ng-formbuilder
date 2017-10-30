import { createActions, createAction } from 'redux-actions';

import * as constants from './constants';

export default createActions({}, 
    ...Object.values(constants)
);


