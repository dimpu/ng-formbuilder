import { BasicFieldTypeSelectors } from '../store/basic-field-type';
import BasicFieldTypeActions from '../store/basic-field-type/actions';

class FieldsWidgetController {
    constructor($ngRedux) {
        this.unsubscribe = $ngRedux.connect(this.mapStateToThis, BasicFieldTypeActions)(this);
    }

    mapStateToThis(state) {
        return {
            fieldTypes: BasicFieldTypeSelectors.getBasicFieldTypes(state).toJS()
        };
    }

    ngOnDestroy() {
        this.unsubscribe();
    }

}


export default FieldsWidgetController;
