import formBuilderComponent from './form-builder.component';
import formErrorMsgs from './form-error-msgs/form-error-msgs';
import fieldBuilder from './field-builder/field-builder';
import fieldPusher from './field-pusher/field-pusher';

angular.module('ngFormBuilder',[
  formErrorMsgs.name,
  fieldBuilder.name,
  fieldPusher.name
])
.directive('formBuilder',formBuilderComponent);
