import FieldBuilderComponent from './field-builder.component';
import AppInputField from './fields/app-input-field/app-input-field';
import AppCheckboxField from './fields/app-checkbox-field/app-checkbox-field';
// import AppDateField from './fields/app-date-field/app-date-field';
// import AppEmptyField from './fields/app-empty-field/app-empty-field';
// import AppFileField from './fields/app-file-field/app-file-field';
// import AppHeaderField from './fields/app-header-field/app-header-field';
// import AppImageField from './fields/app-image-field/app-image-field';
import AppRadioField from './fields/app-radio-field/app-radio-field';
import AppSelectField from './fields/app-select-field/app-select-field';
// import AppSubformField from './fields/app-subform-field/app-subform-field';
import AppTextareaField from './fields/app-textarea-field/app-textarea-field';
// import AppTimeField from './fields/app-time-field/app-time-field';
// import AppPriceField from './fields/app-price-field/app-price-field';
// import AppTotalPriceField from './fields/app-total-price-field/app-total-price-field';
// import AppSignatureField from './fields/app-signature-field/app-signature-field';
// import AppEditerField from './fields/app-editor-field/app-editor-field';
// import AppGreyBarField from './fields/app-greybar-field/app-greybar-field';
//
let fieldBuilderModule = angular.module('field-builder', [
	AppInputField.name,
	AppCheckboxField.name,
	// AppDateField.name,
	AppRadioField.name,
	AppSelectField.name,
	AppTextareaField.name,

	//
	// AppEmptyField.name,
	// AppFileField.name,
	// AppHeaderField.name,
	// AppImageField.name,
	// AppSubformField.name,
	// AppTimeField.name,
	// AppPriceField.name,
	// AppTotalPriceField.name,
	// AppSignatureField.name,
	// AppEditerField.name,
	// AppGreyBarField.name
])
.directive('fieldBuilder', FieldBuilderComponent);

export default fieldBuilderModule;
