import template from './app-time-field.html';
import controller from './app-time-field.controller';
import './app-time-field.css';

let appTimeFieldComponent = { 
        template,
        controller,
       	bindings: {
            field: '=',
            formData: '=',
            formName: '='
        }
};

export default appTimeFieldComponent;
