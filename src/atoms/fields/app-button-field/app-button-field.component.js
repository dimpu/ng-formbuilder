import template from './app-button-field.html';
import controller from './app-button-field.controller';
import './app-button-field.scss';

let appButtonFieldComponent = {
    template,
    controller,
    bindings: {
        field: '<'
    }
};

export default appButtonFieldComponent;
