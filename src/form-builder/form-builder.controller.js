import FieldActions from '../store/fields/actions';

class FormBuilderController {
	constructor($ngRedux){
        this.disconnect = $ngRedux.connect(this.mapToState, FieldActions)(this);
	}

    mapToState(state) {
        return {
            fields: state.fields.toJS()
        }
    }

    onDistroy() {
        this.disconnect();
    }
}
export default FormBuilderController;
