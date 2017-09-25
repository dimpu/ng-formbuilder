import template from './app-file-field.html';
import controller from './app-file-field.controller';
import './app-file-field.css';

let appFileFieldComponent = function(){
	return {
		template,
		controller,
		restrict: 'E',
		controllerAs: 'vm',
		scope: {
			field:'=',
			formData:'=',
			formName:'='
		},
		bindToController: true
	};
};

export default appFileFieldComponent;
