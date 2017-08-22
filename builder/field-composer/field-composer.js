import angular from 'angular';
import '@uirouter/angularjs';
import FieldComposerComponent from './field-composer.component';

let fieldComposerModule = angular.module('field-composer', [
        'ui.router'
    ])
    // uncomment this foor rute
    .config(($stateProvider, $urlRouterProvider) => {
        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('field-composer', {
                url: '/',
                template: '<field-composer></field-composer>'
            });
    })
    .component('fieldComposer', FieldComposerComponent);

export default fieldComposerModule;
