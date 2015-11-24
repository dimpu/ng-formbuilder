import template from './app-checkbox-field.html';
import controller from './app-checkbox-field.controller';
import './app-checkbox-field.css';

let appCheckboxFieldComponent = function(){
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

export default appCheckboxFieldComponent;
