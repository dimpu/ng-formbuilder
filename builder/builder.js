import angular from 'angular';

import fieldComposerModule from './field-composer/field-composer';

angular.module("Builder", [
    fieldComposerModule.name
]);

angular.bootstrap(document, ['Builder']);


