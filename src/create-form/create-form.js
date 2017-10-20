import angular from 'angular';
import CreateFormComponent from './create-form.component';

let createFormModule = angular.module('create-form', [
    ])
  
    .component('createForm', CreateFormComponent);

export default createFormModule;