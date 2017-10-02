import angular from 'angular';
import AppHeaderComponent from './app-header.component';
import modal from 'angular-ui-bootstrap/src/modal';
import createFormModule from '../../create-form/create-form';

let appHeaderModule = angular.module('app-header', [
        createFormModule.name,
        modal
    ])
    .component('appHeader', AppHeaderComponent);

export default appHeaderModule;