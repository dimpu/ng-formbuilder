import template from './app-radio-field.html';
import controller from './app-radio-field.controller';
import './app-radio-field.css';

let appRadioFieldComponent = function(){
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

export default appRadioFieldComponent;
