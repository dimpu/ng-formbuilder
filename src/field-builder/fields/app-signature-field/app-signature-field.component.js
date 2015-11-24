import template from './app-signature-field.html';
import controller from './app-signature-field.controller';
import './app-signature-field.css';

let appSignatureFieldComponent = function($window, $timeout){
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

export default appSignatureFieldComponent;
