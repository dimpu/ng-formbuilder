import angular from 'angular';
import '@uirouter/angularjs';
import NewFormComponent from './new-form.component';

let newFormModule = angular.module('new-form', [
        'ui.router'
    ])
     // uncomment this foor rute
    .config(($stateProvider, $urlRouterProvider)=>{
    	$urlRouterProvider.otherwise('/');

    	$stateProvider
    		.state('new-form', {
    			url: '/new',
    			template: '<new-form></new-form>'
    		});
    })
    .component('newForm', NewFormComponent);

export default newFormModule;