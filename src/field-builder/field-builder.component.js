import template from './field-builder.html';
import controller from './field-builder.controller';
import './field-builder.scss';

let fieldBuilderComponent = {
    template,
    controller,
    bindings: {
        field: '=', //field definition
        formData: '=',
        formName: '=',
    }

};

export default fieldBuilderComponent;
