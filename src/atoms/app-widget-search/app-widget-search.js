import angular from 'angular';
import '@uirouter/angularjs';
import AppWidgetSearchComponent from './app-widget-search.component';

let appWidgetSearchModule = angular.module('app-widget-search', [
        'ui.router'
    ])
    /* // uncomment this foor rute
    .config(($stateProvider, $urlRouterProvider)=>{
    	$urlRouterProvider.otherwise('/');

    	$stateProvider
    		.state('app-widget-search', {
    			url: '/',
    			template: '<app-widget-search></app-widget-search>'
    		});
    })
    */
    .component('appWidgetSearch', AppWidgetSearchComponent);

export default appWidgetSearchModule;