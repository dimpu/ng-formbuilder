import angular from 'angular';
// // import '@uirouter/angularjs';
import FormComposerComponent from './form-composer.component';
import FormBuilder from '../form-builder';

let formComposerModule = angular.module('form-composer', [
        FormBuilder.name
        // 'ui.router'
    ])
    // uncomment this foo rute
    // .config(($stateProvider, $urlRouterProvider)=>{
    // 	$urlRouterProvider.otherwise('/');

    // 	$stateProvider
    // 		.state('form-composer', {
    // 			url: '/',
    // 			template: '<form-composer></form-composer>'
    // 		});
    // })
    .component('formComposer', FormComposerComponent);

    /*
 * As we are using ES6 with Angular 1.x we can't use ng-app directive
 * to bootstrap the application as modules are loaded asynchronously.
 * Instead, we need to bootstrap the application manually
 */

  angular.element(function() {
    angular.bootstrap(document, [formComposerModule.name]);
  });
