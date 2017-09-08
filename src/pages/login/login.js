import angular from 'angular';
import '@uirouter/angularjs';
import PagesLoginLoginComponent from './../../pages/login/login.component';

let pagesLoginLoginModule = angular.module('../../pages/login/login', [
        'ui.router'
    ])
    /* // uncomment this foor rute
    .config(($stateProvider, $urlRouterProvider)=>{
    	$urlRouterProvider.otherwise('/');

    	$stateProvider
    		.state('../../pages/login/login', {
    			url: '/',
    			template: '<../../pages/login/login></../../pages/login/login>'
    		});
    })
    */
    .component('pagesLoginLogin', PagesLoginLoginComponent);

export default pagesLoginLoginModule;