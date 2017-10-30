import template from './form-builder.html';
import controller from './form-builder.controller';
import './form-builder.scss';

let formBuilderComponent = {
    template,
    controller,
    bindings: {
        formJson: '=', //field definition
        formData: '=',
        onSubmit: '&'
    }

};

export default formBuilderComponent;
