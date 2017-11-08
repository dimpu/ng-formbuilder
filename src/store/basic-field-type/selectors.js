import {
    createSelector
} from 'reselect';
import {
    Map
} from 'immutable';

const basicFieldTypes = state => state.basicFieldTypes;
const selectedFormId = state => state.app.get('selectedFormId');

const getBasicFieldTypes = createSelector(
    [basicFieldTypes, selectedFormId],
    (basicFieldTypes, selectedFormId) => 
    basicFieldTypes.map(
        field => field.setIn(['json', 'formId'], selectedFormId)
    ));


export default {
    getBasicFieldTypes
}
