import template from './app-textarea-field.html';
import controller from './app-textarea-field.controller';
import './app-textarea-field.css';

let appTextareaFieldComponent = function(){
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

export default appTextareaFieldComponent;
