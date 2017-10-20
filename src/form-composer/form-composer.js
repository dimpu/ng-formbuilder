import angular from 'angular';
import '@uirouter/angularjs';
import 'angular-ui-layout';

import accordion from 'angular-ui-bootstrap/src/accordion';
import tabs from 'angular-ui-bootstrap/src/tabs';
// app components
import AppHeader from '../common/app-header/app-header';
import FormComposerComponent from './form-composer.component';
import FormBuilderDesignModule from '../form-builder-design/form-builder-design';
import FormBuilder from '../form-builder/form-builder';
import FiledsWidgetModule from '../fields-widget/fields-widget';
import EditFieldPropsModule from '../edit-field-props/edit-field-props';
import FormSettingsModule from '../form-settings/form-settings';

// atoms
import AppWidgetSearchModule from '../atoms/app-widget-search/app-widget-search';

let formComposerModule = angular.module('form-composer', [
        'ui.router',
        'ui.layout',
        tabs,       
        accordion,
        AppHeader.name,
        AppWidgetSearchModule.name,
        FormBuilder.name,
        FormBuilderDesignModule.name,
        FiledsWidgetModule.name,
        EditFieldPropsModule.name,
        FormSettingsModule.name
    ])
    // uncomment this foor rute
    .config(($stateProvider, $urlRouterProvider) => {
        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('form-composer', {
                url: '/form/:id',
                template: '<form-composer></form-composer>'
            });
    })
    .component('formComposer', FormComposerComponent);

export default formComposerModule;
