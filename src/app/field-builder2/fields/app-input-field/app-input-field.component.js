import template from './app-input-field.html';
import controller from './app-input-field.controller';
import './app-input-field.css';

let appInputFieldComponent = function(){
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

export default appInputFieldComponent;
