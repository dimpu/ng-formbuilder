// import index from './index.html';
// import './scss/index.scss';
import '@uirouter/angularjs';
// import './form-composer/form-composer';

// let hi = ()=>{
//     return 'hi';
// }

console.log('hi');

let formComposerModule = angular
.module('my-app', ['ui.router'])
.config(($stateProvider, $urlRouterProvider)=>{
    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('hi', {
            url: '/',
            template: '<hi></hi>'
        });
})
.directive('hi', function() {
    return {
        template: '<h1>Dimpu ARvind</h1>'
    }
})
// .component('hi', {
//     template: '<h1>Dimpu Aravind</h1>'
// }); 

// uncomment this foo rute

// .component('hi', {
//     template:'<h1>HEllow</h1>',
//     //templateUrl: 'templateUrl',
//     // controller: ControllerController,
//     // controllerAs: '$ctrl',
//     // bindings: {
//     //     Binding: '=',
//     // },
// });

// ControllerController.$inject = ['dependency1'];
// function ControllerController(dependency1) {
// var $ctrl = this;


// ////////////////

// $ctrl.$onInit = function() { };
// $ctrl.$onChanges = function(changesObj) { };
// $ctrl.$onDestroy = function() { };
// }


// angular.element(function() {
//     angular.bootstrap(document, [formComposerModule.name]);
//   });