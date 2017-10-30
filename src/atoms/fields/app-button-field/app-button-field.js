import angular from 'angular';
import '@uirouter/angularjs';
import AppButtonFieldComponent from './app-button-field.component';

let appButtonFieldModule = angular.module('app-button-field', [
        'ui.router'
    ])
    /* // uncomment this foor rute
    .config(($stateProvider, $urlRouterProvider)=>{
    	$urlRouterProvider.otherwise('/');

    	$stateProvider
    		.state('app-button-field', {
    			url: '/',
    			template: '<app-button-field></app-button-field>'
    		});
    })
    */
    .component('appButtonField', AppButtonFieldComponent);

export default appButtonFieldModule;