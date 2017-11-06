import {
    createActions
} from 'redux-actions';
import * as constants from './constants';
import fieldActions from '../fields/actions';


let actions = createActions({}, constants.LOAD_FIELD_TYPES);

let fieldCopied = (field) => {
    console.log(field);
    
    return (dispatch) => {
        dispatch(fieldActions.addField(field));
    }
};

actions.fieldCopied = fieldCopied;

export default actions;
