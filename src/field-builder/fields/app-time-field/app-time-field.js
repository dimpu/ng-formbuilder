import AppTimeFieldComponent from './app-time-field.component';

let appTimeFieldModule = angular.module('app-time-field', [

    ])
    .directive('appTimeField', AppTimeFieldComponent);

export default appTimeFieldModule;
