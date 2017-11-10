import angular from 'angular';
import AppHeaderComponent from './app-header.component';
import modal from 'angular-ui-bootstrap/src/modal';
import createFormModule from '../../create-form/create-form';
import ngAnimate from 'angular-animate';

let appHeaderModule = angular.module('app-header', [
        ngAnimate,
        createFormModule.name,
        modal
    ])
    .component('appHeader', AppHeaderComponent);

export default appHeaderModule;