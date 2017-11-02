import FieldActions from '../store/fields/actions';


class EditFieldPropsController {
    constructor($ngRedux) {
        this.disconnect = $ngRedux.connect(this.mapToState, FieldActions)(this);
    }

    mapToState() {
        return {
			// fields: 
		}
    }

    $ngDistroy() {
        this.disconnect();
    }

}


export default EditFieldPropsController;
