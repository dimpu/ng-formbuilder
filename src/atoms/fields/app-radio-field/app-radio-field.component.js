import template from './app-radio-field.html';
import controller from './app-radio-field.controller';
import './app-radio-field.scss';

let appRadioFieldComponent = {
    template,
    controller,
    bindings: {
        field: '=',
        formData: '=',
        formName: '='
    }
};

export default appRadioFieldComponent;
