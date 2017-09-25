import angular from 'angular';
import '@uirouter/angularjs';
import EditFieldPropsComponent from './edit-field-props.component';

let editFieldPropsModule = angular.module('edit-field-props', [
        'ui.router'
    ])
    /* // uncomment this foor rute
    .config(($stateProvider, $urlRouterProvider)=>{
    	$urlRouterProvider.otherwise('/');

    	$stateProvider
    		.state('edit-field-props', {
    			url: '/',
    			template: '<edit-field-props></edit-field-props>'
    		});
    })
    */
    .component('editFieldProps', EditFieldPropsComponent);

export default editFieldPropsModule;