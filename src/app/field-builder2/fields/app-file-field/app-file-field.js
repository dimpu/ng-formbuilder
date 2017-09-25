

import AppFileFieldComponent from './app-file-field.component';
import FileDropZone from './file-drop-zone/file-drop-zone';

let appFileFieldModule = angular.module('app-file-field', [
	,
	FileDropZone.name
])
.directive('appFileField', AppFileFieldComponent);

export default appFileFieldModule;
