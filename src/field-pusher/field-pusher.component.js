import template from './field-pusher.html';
import controller from './field-pusher.controller';
import './field-pusher.css';

let fieldPusherComponent = function(){
	return {
		template,
		controller,
		restrict: 'E',
		controllerAs: 'vm',
		scope: {
			formJson:'='
		},
		bindToController: true
	};
};

export default fieldPusherComponent;
