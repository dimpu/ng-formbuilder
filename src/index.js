// import index from './index.html';
import './scss/index.scss';
import '@uirouter/angularjs';


// App components

// import formCompose from './form-composer/form-composer';
import formComposer from './form-composer/form-composer';
import formsDashboard from './forms-dashboard/forms-dashboard'; 
import FormViewModule from './form-view/form-view';
import AppLogin from './pages/app-login/app-login';
// import AppConfig from './config/config';
import Store from './store/store';

console.log(Store);

angular.module('ngForms', [
    'ui.router',
    formsDashboard.name,
    formComposer.name,
    AppLogin.name,
    Store.name
    // AppConfig.name
    // FormViewModule.nadme 
]);
