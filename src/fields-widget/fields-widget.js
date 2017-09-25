import angular from 'angular';
import FieldsWidgetComponent from './fields-widget.component';

let fieldsWidgetModule = angular.module('fields-widget', [
    ])
    .component('fieldsWidget', FieldsWidgetComponent);

export default fieldsWidgetModule;