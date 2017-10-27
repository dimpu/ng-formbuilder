import angular from 'angular';
import ngRedux from 'ng-redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';


import reducers  from './reducers';

const logger = createLogger({  
  level: 'info',
  collapsed: true
});

export default angular.module('appStore', [ngRedux])
.config(($ngReduxProvider) => {
  $ngReduxProvider
    .createStoreWith(reducers, [thunk, logger], [window.__REDUX_DEVTOOLS_EXTENSION__()]);
});



