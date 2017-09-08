import template from './form-composer.html';
import controller from './form-composer.controller';
import './form-composer.css';

let formComposerComponent = function () {
    return {
        template,
        controller
    };
};

export default formComposerComponent;
