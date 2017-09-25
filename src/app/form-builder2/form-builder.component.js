import template from './form-builder.html';
// import controller from './form-builder.controller';
// import './field-builder.scss';

let formBuilderComponent = {
    template,
    // controller,
    controller:class AuthCtrl {
        constructor($state) {

            this.authType = $state.current.name.replace('app.', '');
        }

    },
    bindings: {
        formJson: '=', //field definition
    }
};

export default formBuilderComponent;
