// import index from './index.html';
import './scss/index.scss';
import '../node_modules/angular-confirm1/dist/angular-confirm.min.css';
import 'angular';

import 'angular-confirm1';

import uiRouter from '@uirouter/angularjs';


// App components

// import formCompose from './form-composer/form-composer';
import formComposer from './form-composer/form-composer';
import formsDashboard from './forms-dashboard/forms-dashboard'; 
// import FormViewModule from './form-view/form-view';
import AppLogin from './pages/app-login/app-login';
import NewForm from './new-form/new-form';
// // import AppConfig from './config/config';
import Store from './store/store';

angular.module('ngForms', [
    'cp.ngConfirm',
    uiRouter,
    formsDashboard.name,
    formComposer.name,
    AppLogin.name,
    NewForm.name,
    Store.name
    // AppConfig.name
    // FormViewModule.nadme 
]);
