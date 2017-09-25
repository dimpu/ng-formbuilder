import template from './form-view.html';
import controller from './form-view.controller';
import './form-view.css';

let formViewComponent = function(){
	return {
		template,
		controller
	};
};

export default formViewComponent;
