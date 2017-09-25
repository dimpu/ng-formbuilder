import Dropzone from 'enyo/dropzone';
import 'enyo/dropzone/dropzone.css';
import './file-drop-zone.css';
let fileDropZoneLink = function(scope, element, attrs, ctrls, Restangular) {
  try {
    let d = Dropzone;
  } catch (error) {
    throw new Error('Dropzone.js not loaded.');
  }

  window.dropzone = new Dropzone(element[0], scope.dropzoneConfig);
  var unwatch = scope.$watch(function(scope) {
    return scope.model;
  }, function() {
    if (scope.model) {
      scope.model = scope.model ? scope.model : [];
      angular.forEach(scope.model, function(file) {
        var mockFile = {
          name: file.name,
          size: file.size,
          server_name: file.server_name
        };
        dropzone.options.addedfile.call(dropzone, mockFile);
      });
      unwatch();
    }
  });




  dropzone.on('complete', function(file) {
  
    var file_index = dropzone.files.indexOf(file);
    dropzone.files[file_index].server_name = JSON.parse(file.xhr.response).file_name;
    scope.$apply(function() {
      scope.model = scope.model ? scope.model : [];
      scope.model.push({
        server_name: dropzone.files[file_index].server_name,
        name: dropzone.files[file_index].name,
        size: dropzone.files[file_index].size
      });
    });
  });
  dropzone.on('removedfile', function(file) {
    Restangular
      .one('file', file.server_name)
      .remove()
      .then(function(response) {
        if (response) {
          scope.model.splice(scope.model.indexOf(file), 1);
        }
      });
  });

  scope.dropzone = dropzone;

};

export default fileDropZoneLink;
