import AuthActions from '../../store/auth/actions';

class AppLoginController {

    constructor($ngRedux) {
        this.unsubscribe = $ngRedux.connect(this.mapStateToThis, AuthActions)(this);
    }

	mapStateToThis(state) {
        return { };
    }

    ngOnDestroy() {
        this.unsubscribe();
    }

}


export default AppLoginController;
