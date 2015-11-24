import template from './field-builder.html';
import controller from './field-builder.controller';
import './field-builder.css';

let fieldBuilderComponent = function(){
	return {
		template,
		controller,
		restrict: 'E',
		controllerAs: 'vm',
		scope: {
			field:'=', //field definition
			formData:'=',
			formName:'=',

		},
		bindToController: true
	};
};

export default fieldBuilderComponent;
