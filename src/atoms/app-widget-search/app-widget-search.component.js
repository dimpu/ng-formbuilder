import template from './app-widget-search.html';
import controller from './app-widget-search.controller';
import './app-widget-search.scss';

let appWidgetSearchComponent = {
    template,
    controller,
    bindings: {
        fields: '='
    }
};

export default appWidgetSearchComponent;
