import angular from 'angular';
import ngRedux from 'ng-redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import ngReduxRouter from 'redux-ui-router';
import uiRouter from '@uirouter/angularjs';


import reducers  from './reducers';

const logger = createLogger({  
  level: 'info',
  collapsed: true
});

export default angular.module('appStore', [uiRouter, ngRedux, ngReduxRouter])
.config(($ngReduxProvider, $stateProvider) => {


  $ngReduxProvider
    .createStoreWith(reducers, ['ngUiRouterMiddleware',thunk, logger], [window.__REDUX_DEVTOOLS_EXTENSION__()]);
})
.run(($transitions, $state, $ngRedux) => {
  // If save something to the store, dispatch will force state change update
  console.log('will do dispatch');
  $ngRedux.dispatch({ type: 'SOME_ACTION' });
  console.log('did dispatch');

  const matchCriteria = { to: state => state.prohibited };

  $transitions.onBefore(matchCriteria, $transition$ => {
    if ($transition$.to().prohibited) {
      console.log('prohibited state change cancelled');
      return $state.target('app', { location: 'replace' });
    }
  });

  console.log('$transitions.onBefore callback is ready');
});



