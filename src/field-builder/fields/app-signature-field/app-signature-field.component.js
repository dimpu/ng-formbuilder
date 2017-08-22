import template from './app-signature-field.html';
import controller from './app-signature-field.controller';
import './app-signature-field.css';

let appSignatureFieldComponent = function ($window, $timeout) {
    return {
        template,
        controller,
        bindings: {
            field: '=',
            formData: '=',
            formName: '='
        }
    };
};

export default appSignatureFieldComponent;
