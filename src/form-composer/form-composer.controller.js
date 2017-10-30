import FormActions from '../store/forms/actions';

class FormComposerController {
    constructor($ngRedux, $stateParams) {
        this.formId = $stateParams.id;
        this.disconnect = $ngRedux.connect(this.mapToState, FormActions)(this);
        this.formData = {};
        this.formJson = {};
        this.formJson.fields = [{
          type: 'text'
        }];
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
