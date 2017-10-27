import template from './app-header.html';
import controller from './app-header.controller';
import './app-header.scss';

let appHeaderComponent = {
		template,
		controller,
		bindings: {
			showSubToolbar: '<'
		}
};

export default appHeaderComponent;
