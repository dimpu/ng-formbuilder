import NetworkSelector from '../../store/network/selectors';
import AppActions from '../../store/app/actions';

class AppHeaderController {
    constructor($ngRedux) {
        this.disconnect = $ngRedux.connect(this.mapToState, AppActions)(this);
    }

    mapToState(state) {
        return {
            fetching: NetworkSelector.getNetwork(state)
        }
    }

    onDistory(){
        this.disconnect();
    }


}


export default AppHeaderController;
