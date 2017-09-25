import template from './app-radio-field.html';
import controller from './app-radio-field.controller';
import './app-radio-field.css';

let appRadioFieldComponent = function(){
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

export default appRadioFieldComponent;
