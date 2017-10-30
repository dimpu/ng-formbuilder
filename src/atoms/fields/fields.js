import AppInputField from './app-input-field/app-input-field';
import AppRadioField from './app-radio-field/app-radio-field';
import AppCheckboxField from './app-checkbox-field/app-checkbox-field';
import AppSelectField from './app-select-field/app-select-field';
import AppTextAreaField from './app-textarea-field/app-textarea-field';
import AppButtonField from './app-button-field/app-button-field';


export default angular.module('AppFields', [
        AppInputField.name,
        AppTextAreaField.name,
        AppRadioField.name,
        AppCheckboxField.name,
        AppSelectField.name,
        AppButtonField.name
    ]);

