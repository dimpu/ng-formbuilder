
import FileDropZoneComponent from './file-drop-zone.component';

let fileDropZoneModule = angular.module('file-drop-zone', [

])
.directive('fileDropZone', FileDropZoneComponent);

export default fileDropZoneModule;
