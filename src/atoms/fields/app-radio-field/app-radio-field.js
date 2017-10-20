import angular from 'angular';
import AppRadioFieldComponent from './app-radio-field.component';


let appRadioFieldModule = angular.module('app-radio-field', [
    ])
    .component('appRadioField', AppRadioFieldComponent);

export default appRadioFieldModule;