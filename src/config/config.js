import angular from 'angular';
import reducers from '../store/reducers';
import logger from 'redux-logger';
import ngRedux from 'ng-redux';

// const logger = createLogger({
//     level: 'info',
//     collapsed: true
// });

// const $storeFactory = ['$ngRedux',
//     ($ngRedux) => {
//         let store = {};
//     }
// ];

// export default angular
//     .module('$codexStore', [ngRedux])
//     .config(['$ngReduxProvider', ($ngReduxProvider) => {
//         let devTools = window.__REDUX_DEVTOOLS_EXTENSION__ ? [window.__REDUX_DEVTOOLS_EXTENSION__()] : [];
//         $ngReduxProvider.createStoreWith(reducers, [
//             logger
//         ], devTools);

//     }])
//     .factory('$store', $storeFactory);
