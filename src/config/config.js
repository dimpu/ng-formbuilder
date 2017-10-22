import angular from 'angular';
import reducers from '../store';  
import logger from 'redux-logger';


const $storeFactory = ['$ngRedux',
($ngRedux) => {
    let store = {};


}];


export default angular
.module('$codexStore', [ ngRedux ])
.config(['$ngReduxProvider', ($ngReduxProvider) => {
    if (process.env.NODE_ENV === 'production') {
        // $ngReduxProvider.createStoreWith(reducers, [
        //     thunk,
        //     promise,
        // ]);
    } else {
        let devTools = window.__REDUX_DEVTOOLS_EXTENSION__ ?
            [window.__REDUX_DEVTOOLS_EXTENSION__()] :
            [];
        $ngReduxProvider.createStoreWith(reducers, [
            // thunk,
            // promise,
            logger
        ], devTools);
    }
}])
.factory('$store', $storeFactory);