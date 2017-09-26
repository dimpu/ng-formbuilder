import template from './app-checkbox-field.html';
import controller from './app-checkbox-field.controller';
import './app-checkbox-field.scss';

let appCheckboxFieldComponent =  {
	template,
	controller,
	bindings: {
        field: '=',
        formData: '=',
        formName: '='
    }
};

export default appCheckboxFieldComponent;
