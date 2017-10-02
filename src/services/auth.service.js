
const SERVICE_NAME = 'AuthService';

export default class AuthService {
    constructor($state, angularAuth0, $timeout) {
        this.angularAuth0 = angularAuth0;        
    }

    login() {
        angularAuth0.authorize();
    }

    logout() {

    }
}


AuthService.name = SERVICE_NAME;