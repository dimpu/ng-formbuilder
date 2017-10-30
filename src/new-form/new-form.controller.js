import * as fields from '../atoms/fields/field-types';
import _ from 'lodash';
import FormActions from '../store/forms/actions';

class NewFormController {

    constructor($ngRedux) {

        this.disconnect = $ngRedux.connect(this.mapToState, FormActions)(this);
        this.formData = {};
        this.formJson = {};
        this.formJson.fields = [
            _.assignIn(fields.text.json, {
                label: 'Form Name',
                name: 'formName',
                validation: {
                    required: true
                }
            }),
            _.assignIn(fields.textarea.json, {
                label: 'Form Description',
                name: 'formDescription',
                validation: {
                    required: true
                }
            }),
            _.assignIn(fields.radio.json, {
                label: 'Status',
                name: 'formStatus',
                inline: "true",
                items: [{
                        label: 'On',
                        value: "true"
                    },
                    {
                        label: 'Off',
                        value: "false"
                    }
                ]
            }),
            _.assignIn(fields.button.json, {
                label: 'Submit',
                type: 'submit'
            })
        ];
    }

    mapToState(state) {
        return {};
    }

    onSubmit(data) {
        console.log(data);
    }

    ngOnDestroy() {
        this.disconnect();
    }
}


export default NewFormController;
