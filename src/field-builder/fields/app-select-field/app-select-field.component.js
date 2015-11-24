import template from './app-select-field.html';
import controller from './app-select-field.controller';
import './app-select-field.css';

let appSelectFieldComponent = function(){
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

export default appSelectFieldComponent;
