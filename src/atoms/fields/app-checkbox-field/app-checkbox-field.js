import angular from 'angular';
import '@uirouter/angularjs';
import AppCheckboxFieldComponent from './app-checkbox-field.component';

let appCheckboxFieldModule = angular.module('app-checkbox-field', [
    ])
    .component('appCheckboxField', AppCheckboxFieldComponent);

export default appCheckboxFieldModule;