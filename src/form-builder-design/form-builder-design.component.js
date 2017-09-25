import template from './form-builder-design.html';
import controller from './form-builder-design.controller';
import './form-builder-design.scss';

let formBuilderDesignComponent = {
		template,
		controller,
		bindings: {
			formJson: '=', //field definition
	}
};

export default formBuilderDesignComponent;
