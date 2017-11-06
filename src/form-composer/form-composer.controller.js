import FieldsActions from '../store/fields/actions';

class FormComposerController {
    constructor($ngRedux, $stateParams) {
        this.formId = $stateParams.id;
        this.disconnect = $ngRedux.connect(this.mapToState, FieldsActions)(this);
        this.formData = {};
        this.formJson = {};
        FieldsActions.fetchFields();
    }
    
    $ngOnInit() {
        this.fetchFields(this.formId);
    }

    $ngOnChange(changeObject) {
        console.log(changeObject);
    }

    mapToState(state) {
      return {
        fields: state.fields
      }
    }

    $onDestroy() {
      this.disconnect();
    }
}


export default FormComposerController;
