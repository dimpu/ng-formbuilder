import FieldActions from '../store/fields/actions';
import FieldSelector from '../store/fields/selectors';
import { isEmpty } from 'lodash';

class FormBuilderDesignController {
    constructor($ngRedux) {
        this.selectedField = null;
        this.disconnect = $ngRedux.connect(this.mapStateToThis, FieldActions)(this);
        console.log(this);
    }

    mapStateToThis(state) {
        return {
             fields: FieldSelector.getFields(state).toJS()
        }
    }

    onDistroy() {
        this.disconnect();
    }
   
    onFieldSelect(field) {
        this.fieldSelect(field);
        this.selectedField = field;
        console.log(field);
    }

    dropCallback() {
        console.log('dropped');
    }

    fieldUpdateIndex(index) {
        console.log('---index---');
        console.log(index);
    }

    hasFields(fields) {
        return isEmpty(fields); 
    }
}


export default FormBuilderDesignController;
