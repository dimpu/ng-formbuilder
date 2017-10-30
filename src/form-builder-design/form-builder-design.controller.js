import FormActions from '../store/forms/actions';
import FormSelector from '../store/forms/selectors';


class FormBuilderDesignController {
    constructor($ngRedux) {
        this.selectedField = null;
        this.disconnect = $ngRedux.connect(this.mapStateToThis, FormActions)(this);
    }

    mapStateToThis(state) {
        return {
            // forms: FormSelector.getForms(state).toJs()
        }
    }

    $onChanges() {
        console.log(this);
    }

    $onDistroy() {
        this.disconnect();
    }

    onFieldSelect1(field) {
        this.selectField(field);
        this.selectedField = field;
        console.log(field);
    }
}


export default FormBuilderDesignController;
