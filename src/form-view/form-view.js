import angular from 'angular';
import '@uirouter/angularjs';
import FormViewComponent from './form-view.component';

let formViewModule = angular.module('form-view', [
        'ui.router'
    ])
     // uncomment this foor rute
    .config(($stateProvider, $urlRouterProvider)=>{
    	$urlRouterProvider.otherwise('/');

    	$stateProvider
    		.state('form-view', {
    			url: '/form/view/:id',
    			template: '<form-view></form-view>'
    		});
    })
    
    .component('formView', FormViewComponent);

export default formViewModule;