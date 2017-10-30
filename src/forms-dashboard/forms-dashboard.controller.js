import FormActions from '../store/forms/actions';
import FormSelector from '../store/forms/selectors';


class FormsDashboardController {
    constructor($ngRedux, $ngConfirm) {
        this.$ngConfirm = $ngConfirm;
		this.selectedField = null;
        this.disconnect = $ngRedux.connect(this.mapStateToThis, FormActions)(this);
        this.fetchForms();
    }

    mapStateToThis(state) {
        console.log(state);
        return {
            forms: state.forms.toJS()
        }
    }

    onFieldSelect1(field) {
        this.selectField(field);
        this.selectedField = field;
    }

    confirmDeleteForm(formId) {
        let self = this;
        this.$ngConfirm({
            title: 'Delete Form',

            buttons: {
                ok: {
                    text: "Yes",
                    btnClass: 'btn-primary',
                    keys: ['enter'], // will trigger when enter is pressed 
                    action: function (scope) {
                        this.close();
                        self.deleteForm(formId);
                    }
                },
                close: function (scope) {}
            }
        })
    }

    $onChanges() {
        console.log(this);
    }

    $onDistroy() {
        this.disconnect();
    }


}


export default FormsDashboardController;
