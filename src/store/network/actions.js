import { createActions } from 'redux-actions';
import * as constants from './constants';

export default createActions({},
  ...Object.values(constants)
);
