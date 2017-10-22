// import index from './index.html';
import './scss/index.scss';
import '@uirouter/angularjs';
import ngRedux from 'ng-redux';

// App components

// import formCompose from './form-composer/form-composer';
import formComposer from './form-composer/form-composer';
import formsDashboard from './forms-dashboard/forms-dashboard'; 
import FormViewModule from './form-view/form-view';
import AppLogin from './pages/app-login/app-login';
import AppConfig from './config/config';

    angular.module('ngForms', [
        ngRedux,
        'ui.router',
        formsDashboard.name,
        formComposer.name,
        AppLogin.name,
        AppConfig.name
        // FormViewModule.nadme 
    ]);
