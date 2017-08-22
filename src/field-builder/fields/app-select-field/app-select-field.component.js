import template from './app-select-field.html';
import controller from './app-select-field.controller';
import './app-select-field.css';

let appSelectFieldComponent = function(){
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

export default appSelectFieldComponent;
