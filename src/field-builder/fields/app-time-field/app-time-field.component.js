import template from './app-time-field.html';
import controller from './app-time-field.controller';
import './app-time-field.css';

let appTimeFieldComponent = function(){
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

export default appTimeFieldComponent;
