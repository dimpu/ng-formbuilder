import angular from 'angular';
import '@uirouter/angularjs';
import AppHeader from '../common/app-header/app-header';

import FormsDashboardComponent from './forms-dashboard.component';


let formsDashboardModule = angular.module('forms-dashboard', [
        'ui.router',
        AppHeader.name
    ])
     // uncomment this foor rute
    .config(($stateProvider, $urlRouterProvider)=>{
    	$urlRouterProvider.otherwise('/');

    	$stateProvider
    		.state('forms', {
    			url: '/',
    			template: '<forms-dashboard></forms-dashboard>'
    		});
    })
    
    .component('formsDashboard', FormsDashboardComponent);

export default formsDashboardModule;