import template from './form-error-msgs.html';
import controller from './form-error-msgs.controller';
import './form-error-msgs.css';

let formErrorMsgsComponent = function () {
    return {
        template,
        controller,
        replace: true,
        bindings: {
            fieldName: '='
        }
    };
};

export default formErrorMsgsComponent;
