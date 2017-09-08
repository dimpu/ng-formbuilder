import angular from 'angular';
import '@uirouter/angularjs';
import PagesLoginComponent from './../../pages/login.component';

let pagesLoginModule = angular.module('../../pages/login', [
        'ui.router'
    ])
    /* // uncomment this foor rute
    .config(($stateProvider, $urlRouterProvider)=>{
    	$urlRouterProvider.otherwise('/');

    	$stateProvider
    		.state('../../pages/login', {
    			url: '/',
    			template: '<../../pages/login></../../pages/login>'
    		});
    })
    */
    .component('pagesLogin', PagesLoginComponent);

export default pagesLoginModule;