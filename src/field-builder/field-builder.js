import angular from 'angular';
import '@uirouter/angularjs';
import FieldBuilderComponent from './field-builder.component';

import AppFields from '../atoms/fields/fields';

let fieldBuilderModule = angular.module('field-builder', [
        'ui.router',
        AppFields.name
    ])
    /* // uncomment this foor rute
    .config(($stateProvider, $urlRouterProvider)=>{
    	$urlRouterProvider.otherwise('/');

    	$stateProvider
    		.state('field-builder', {
    			url: '/',
    			template: '<field-builder></field-builder>'
    		});
    })
    */
    .component('fieldBuilder', FieldBuilderComponent);

export default fieldBuilderModule;
