import link from './file-drop-zone.link';

let fileDropZoneComponent = function(){
	return {
		link,
		restrict: 'AE',
		template: '<div ng-transclude></div>',
		scope: {
          dropzone: '=',
          dropzoneConfig: '=',
          eventHandlers: '=',
          model:'='
		},
    transclude: true
	};
};

export default fileDropZoneComponent;
