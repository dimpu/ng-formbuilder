import angular from 'angular';
import '@uirouter/angularjs';
import AppHeaderComponent from './app-header.component';

let appHeaderModule = angular.module('app-header', [
        'ui.router'
    ])
    /* // uncomment this foor rute
    .config(($stateProvider, $urlRouterProvider)=>{
    	$urlRouterProvider.otherwise('/');

    	$stateProvider
    		.state('app-header', {
    			url: '/',
    			template: '<app-header></app-header>'
    		});
    })
    */
    .component('appHeader', AppHeaderComponent);

export default appHeaderModule;