import template from './form-builder.html';
import controller from './form-builder.controller';
// import './field-builder.css';

let formBuilderComponent = function () {
    return {
        template,
        controller,
        bindings: {
            formJson: '=', //field definition
        }
    };
};

export default formBuilderComponent;
