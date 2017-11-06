import FormActions from '../store/forms/actions';
// import FieldSelector from '../store/fields/selectors';
import {isEmpty} from 'lodash';

class FormBuilderDesignController {
    constructor($ngRedux) {
        this.selectedField = null;
        this.disconnect = $ngRedux.connect(this.mapStateToThis, FormActions)(this);
    }

    mapStateToThis(state) {
        return {
            // fields: FieldSelector.getFields(state).toJs()
        }
    }

    $onChanges(changeObject) {
        console.log('-----form change------');
        console.log(isEmpty(this.formJson));
        if(isEmpty(this.formJson)) {
            this.formJson.fields = [];
            // this.formJson.fields.push({
            //     columnsize: 12,
            //     type: 'empty'
            // });
        }
        
    }

    $onDistroy() {
        this.disconnect();
    }

    onFieldSelect1(field) {
        this.selectField(field);
        this.selectedField = field;
        console.log(field);
    }

    fieldAdded() {
        console.log('fieldAdded');
    }

    dragend() {
        console.log('drag end');
    }

    dragoverCallback() {
        console.log('drag over');
    }
}


export default FormBuilderDesignController;
