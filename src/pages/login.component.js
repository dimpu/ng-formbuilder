import template from './../../pages/login.html';
import controller from './../../pages/login.controller';
import './../../pages/login.css';

let pagesLoginComponent = function(){
	return {
		template,
		controller
	};
};

export default pagesLoginComponent;
