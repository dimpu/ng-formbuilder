import FieldsActions from '../store/fields/actions';

class FormComposerController {
    constructor($ngRedux, $stateParams) {
        this.formId = $stateParams.id;
        this.disconnect = $ngRedux.connect(this.mapToState, FieldsActions)(this);
        this.formData = {};
        this.formJson = {};
    }
    
    $onInit() {
        this.setFormId(this.formId);
        this.fetchFields(this.formId);
    }

    mapToState(state) {
      return {
      }
    }

    $onDestroy() {
      this.disconnect();
    }
}


export default FormComposerController;
