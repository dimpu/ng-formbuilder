import angular from 'angular';

import FormBuilderComponent from './form-builder.component';
// import formErrorMsgs from './form-error-msgs/form-error-msgs';
import fieldBuilder from '../field-builder/field-builder';
// import fieldPusher from '../field-pusher/field-pusher';


let formBuilderModule = angular.module('form-builder', [
        fieldBuilder.name,
        // fieldPusher.name
    ])
    /* // uncomment this foor rute
    .config(($stateProvider, $urlRouterProvider)=>{
    	$urlRouterProvider.otherwise('/');

    	$stateProvider
    		.state('form-builder', {
    			url: '/',
    			template: '<form-builder></form-builder>'
    		});
    })
    */
    .component('formBuilder', FormBuilderComponent);

export default formBuilderModule;
