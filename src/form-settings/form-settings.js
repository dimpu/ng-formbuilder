import angular from 'angular';
import '@uirouter/angularjs';
import FormSettingsComponent from './form-settings.component';

let FormSettingsModule = angular.module('form-settings', [
        'ui.router'
    ])
    /* // uncomment this foor rute
    .config(($stateProvider, $urlRouterProvider)=>{
    	$urlRouterProvider.otherwise('/');

    	$stateProvider
    		.state('src/form-settings', {
    			url: '/',
    			template: '<src/form-settings></src/form-settings>'
    		});
    })
    */
    .component('formSettings', FormSettingsComponent);

export default FormSettingsModule;