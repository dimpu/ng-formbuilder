import angular from 'angular';
import AppSelectFieldComponent from './app-select-field.component';

let appSelectFieldModule = angular.module('app-select-field', [
    ])
    .component('appSelectField', AppSelectFieldComponent);

export default appSelectFieldModule;