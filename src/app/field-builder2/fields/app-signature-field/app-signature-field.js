import AppSignatureFieldComponent from './app-signature-field.component';
import ngSignature from './ng-signature/ng-signature';

let appSignatureFieldModule = angular.module('app-signature-field', [
        ngSignature.name
    ])
    .directive('appSignatureField', AppSignatureFieldComponent);

export default appSignatureFieldModule;
