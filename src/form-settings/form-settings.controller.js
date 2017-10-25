import FormSettingsJson from './form-settings.json';

class FormSettingsController {
	constructor(){
		this.formData = {};
		this.formSettingsJson = FormSettingsJson; 
		this.name = 'form-settings';
	}
}


export default FormSettingsController;
