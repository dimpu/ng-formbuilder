import FormErrorMsgsComponent from './form-error-msgs.component';

let formErrorMsgsModule = angular.module('form-error-msgs', [
        'ngMessages'
    ])
    .directive('formErrorMsgs', FormErrorMsgsComponent);

export default formErrorMsgsModule;
