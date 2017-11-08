import FieldActions from '../store/fields/actions';
 

class EditFieldPropsController {
    constructor($ngRedux) {
        this.disconnect = $ngRedux.connect(this.mapToState, FieldActions)(this);
    }

    mapToState(state) {
        return {
            field: state.app.get('selectedField') 
        }
    }

    $ngDistroy() {
        this.disconnect();
    }

}


export default EditFieldPropsController;
