import template from './app-checkbox-field.html';
import controller from './app-checkbox-field.controller';
import './app-checkbox-field.css';

let appCheckboxFieldComponent = function(){
	return {
		template,
		controller,
		bindings: {
			field:'=',
			formData:'=',
			formName:'='
		}
	};
};

export default appCheckboxFieldComponent;
