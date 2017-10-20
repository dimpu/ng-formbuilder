import template from './create-form.html';
import controller from './create-form.controller';
import './create-form.scss';

let createFormComponent = function(){
	return {
		template,
		controller
	};
};

export default createFormComponent;
