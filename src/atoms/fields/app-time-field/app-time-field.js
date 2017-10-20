import angular from 'angular';
import timepicker from 'angular-ui-bootstrap/src/timepicker';

import AppTimeFieldComponent from './app-time-field.component';

let appTimeFieldModule = angular.module('app-time-field', [
        timepicker
    ])
    .directive('appTimeField', AppTimeFieldComponent);

export default appTimeFieldModule;
