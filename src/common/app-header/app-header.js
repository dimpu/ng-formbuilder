import angular from 'angular';
import '@uirouter/angularjs';
import AppHeaderComponent from './app-header.component';
import modal from 'angular-ui-bootstrap/src/modal';
import createFormModule from '../../create-form/create-form';

let appHeaderModule = angular.module('app-header', [
        'ui.router',
        createFormModule.name,
        modal
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