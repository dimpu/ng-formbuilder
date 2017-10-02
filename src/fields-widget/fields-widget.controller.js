import input from '../atoms/fields/app-input-field/app-input-filed.meta.json';
import textarea from '../atoms/fields/app-textarea-field/app-textarea-field.meta.json'
import checkbox from '../atoms/fields/app-checkbox-field/app-checkbox-field.meta.json';
import radio from '../atoms/fields/app-radio-field/app-radio-field.meta.json';
import select from '../atoms/fields/app-select-field/app-select-field.meta.json';

class FieldsWidgetController {
    constructor() {
        this.fields = [...input, textarea, checkbox, radio, select];
    }
}


export default FieldsWidgetController;
