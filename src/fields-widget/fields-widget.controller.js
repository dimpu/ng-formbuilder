import { FieldTypeSelectors } from '../store/field-type';
import FieldTypeActions from '../store/field-type/actions';

class FieldsWidgetController {
    constructor($ngRedux) {
        console.log(this);
        this.unsubscribe = $ngRedux.connect(this.mapStateToThis, FieldTypeActions)(this);
    }

    mapStateToThis(state) {
        return {
            fieldTypes: FieldTypeSelectors.getFieldTypes(state).toJS()
        };
    }

    ngOnDestroy() {
        this.unsubscribe();
    }

}


export default FieldsWidgetController;
