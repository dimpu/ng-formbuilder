class FormComposerController {
	constructor(){
		// alert('hi');
		this.name = 'form-composer';
		this.formJson = {
			"form_name":"Form Builder",
			"fields":[{
				"type": "text",
				"label": "Text",
				"name": "text_",
				"placeholder": "Enter your text!",
				"validate": {
				  "require": "false",
				  "minlenght": "undefined",
				  "maxlenght": "undefined"
				},
				"columnsize": 12
			  }]
		  };
	}
}


export default FormComposerController;
