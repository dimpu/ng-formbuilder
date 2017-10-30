import FieldActions from '../store/fields/actions';


class EditFieldPropsController {
    constructor($ngStore) {
        this.disconnect = $ngStore.connect(this.mapToState, FieldActions)(this);
    }

    mapToState() {
        return {
			fields: 
		}
    }

    $ngDistroy() {
        this.disconnect();
    }

}


export default EditFieldPropsController;
