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
             fields: state.fields.toJS()
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

    hasFields(fields) {
        return isEmpty(fields); 
    }
}


export default FormBuilderDesignController;
