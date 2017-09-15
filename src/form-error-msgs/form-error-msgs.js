import angular from 'angular';
import FormErrorMsgsComponent from './form-error-msgs.component';

let formErrorMsgsModule = angular.module('form-error-msgs', [
        'ngMessages'
    ])
    .component('formErrorMsgs', FormErrorMsgsComponent);

export default formErrorMsgsModule;
