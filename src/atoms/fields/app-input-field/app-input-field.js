import angular from 'angular';
import AppInputFieldComponent from './app-input-field.component';

let appInputFieldModule = angular.module('app-input-field', [
    ])
    .component('appInputField', AppInputFieldComponent);

export default appInputFieldModule;