// const INITIAL_STATE = [];

// export default function lineup(state = INITIAL_STATE, action) {  
//   if (!action || !action.type) {
//     return state;
//   }
//   switch (action.type) {
//     case PARTY_JOINED:
//       return R.append(action.payload)(state);
//     case PARTY_SEATED:
//       return R.reject(n => n.partyId === action.payload.partyId)(state);
//     case PARTY_LEFT:
//       return R.reject(n => n.partyId === action.payload.partyId)(state);
//     default:
//       return state;
//   }
// }


// function reducers(state , action) {
//   switch(action.type) {
//     case 'INCREESE':
//       return state +1;
//     case 'DECREESE':
//       return state -1;
//     default:
//       return state;
//   }
// }

import angular from 'angular';
import ngRedux from 'ng-redux';
import { createLogger } from 'redux-logger';

import reducers  from './reducers';

const logger = createLogger({  
  level: 'info',
  collapsed: true
});

export default angular.module('appStore', [ngRedux])
.config(($ngReduxProvider) => {
  $ngReduxProvider
    .createStoreWith(reducers, [logger], [window.__REDUX_DEVTOOLS_EXTENSION__()]);
});



