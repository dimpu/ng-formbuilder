import angular from 'angular';
import 'angular-drag-and-drop-lists';

import FormBuilderDesignComponent from './form-builder-design.component';
// import formErrorMsgs from './form-error-msgs/form-error-msgs';
import fieldBuilder from '../field-builder/field-builder';
// import fieldPusher from '../field-pusher/field-pusher';

let formBuilderDesignModule = angular.module('form-builder-design', [
        'dndLists',
        fieldBuilder.name,
    ])
    .component('formBuilderDesign', FormBuilderDesignComponent);

export default formBuilderDesignModule;