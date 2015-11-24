
import NgSignatureComponent from './ng-signature.component';

let ngSignatureModule = angular.module('ng-signature', [
])
.directive('ngSignature', NgSignatureComponent);

export default ngSignatureModule;
