

import PopOverClose from './popover-close.directive';

let extendAngualrUiModule = angular.module('extend-angualr-ui', [])
.directive('popoverClose',PopOverClose)
.directive('popoverElem', function(){
  return{
		restrict: 'EA',
    link: function(scope, element, attrs) {
      element.on('click', function(){
        element.addClass('trigger');
      });
    }
  };
});

export default extendAngualrUiModule;
