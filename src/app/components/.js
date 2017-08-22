import angular from 'angular';
import '@uirouter/angularjs';
import Component from './/.component';

let Module = angular.module('/', [
        'ui.router'
    ])
    /* // uncomment this foor rute
    .config(($stateProvider, $urlRouterProvider)=>{
    	$urlRouterProvider.otherwise('/');

    	$stateProvider
    		.state('/', {
    			url: '/',
    			template: '</><//>'
    		});
    })
    */
    .component('', Component);

export default Module;