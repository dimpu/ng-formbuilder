import template from './app-input-field.html';
import controller from './app-input-field.controller';
import './app-input-field.scss';

let appInputFieldComponent = {
    template,
    controller,
    bindings: {
        field: '=',
        formData: '=',
        formName: '='
    }
};

export default appInputFieldComponent;
