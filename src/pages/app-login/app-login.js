import angular from 'angular';
import '@uirouter/angularjs';
import AppLoginComponent from './app-login.component';

let appLoginModule = angular.module('app-login', [
        'ui.router'
    ])
    // uncomment this foor rute
    .config(($stateProvider, $urlRouterProvider)=>{
    	$urlRouterProvider.otherwise('/');

    	$stateProvider
    		.state('app-login', {
    			url: '/',
    			template: '<app-login></app-login>'
    		});
    })
    .component('appLogin', AppLoginComponent);

export default appLoginModule;