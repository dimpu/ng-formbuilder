import link from './file-drop-zone.link';

let fileDropZoneComponent = function(){
	return {
		link,
		transclude: true,
		template: '<div ng-transclude></div>',
		bindings: {
          dropzone: '=',
          dropzoneConfig: '=',
          eventHandlers: '=',
          model:'='
		}
	};
};

export default fileDropZoneComponent;
