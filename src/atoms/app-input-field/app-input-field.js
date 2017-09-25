import angular from 'angular';
import '@uirouter/angularjs';
import AppInputFieldComponent from './app-input-field.component';

let appInputFieldModule = angular.module('app-input-field', [
        'ui.router'
    ])
    /* // uncomment this foor rute
    .config(($stateProvider, $urlRouterProvider)=>{
    	$urlRouterProvider.otherwise('/');

    	$stateProvider
    		.state('app-input-field', {
    			url: '/',
    			template: '<app-input-field></app-input-field>'
    		});
    })
    */
    .component('appInputField', AppInputFieldComponent);

export default appInputFieldModule;