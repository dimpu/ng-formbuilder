import formBuilderComponent from './form-builder.component';
// import formErrorMsgs from './form-error-msgs/form-error-msgs';
// import fieldBuilder from '../field-builder/field-builder';
// import fieldPusher from '../field-pusher/field-pusher';

class FBC {
    constructor() {

    }
}

let FormBuilder = angular.module('ngFormBuilder', [
        // formErrorMsgs.name,
        // fieldBuilder.name,
        // fieldPusher.name
    ])
    // .component('formBuilder', formBuilderComponent);
    .component('formBuilder', {
        controller: FBC,
        template: '<h1>Hellow from builder</h1>'
    }); 
export default FormBuilder;
