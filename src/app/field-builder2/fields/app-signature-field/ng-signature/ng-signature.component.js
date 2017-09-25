import template from './ng-signature.html';
import controller from './ng-signature.controller';
import link from './ng-signature.link';

import './ng-signature.css';

let ngSignatureComponent = function(){
	return {
		template,
		link,
		controller,
		bindings: {
			ngSignature:'='
		}
	};
};

export default ngSignatureComponent;
