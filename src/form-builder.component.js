import template from './form-builder.html';
import controller from './form-builder.controller';
// import './field-builder.css';

let formBuilderComponent = function () {
    return {
        template,
        controller,
        restrict: 'E',
        controllerAs: 'vm',
        scope: {
            formJson: '=', //field definition
        },
        bindToController: true
    };
};

export default formBuilderComponent;
