import template from './field-composer.html';
import controller from './field-composer.controller';
import './field-composer.css';

let fieldComposerComponent = function(){
	return {
		template,
		controller
	};
};

export default fieldComposerComponent;
