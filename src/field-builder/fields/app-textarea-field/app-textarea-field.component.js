import template from './app-textarea-field.html';
import controller from './app-textarea-field.controller';
import './app-textarea-field.css';

let appTextareaFieldComponent = function(){
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

export default appTextareaFieldComponent;
