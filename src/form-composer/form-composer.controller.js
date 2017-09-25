class FormComposerController {
	constructor(){
		this.name = 'form-composer';
        this.formJson = {
        "form_name":"Form Builder",
        "fields":[
          {
            "type": "text",
            "label": "Text 1",
            "name": "text_",
            "placeholder": "Enter your text!",
            "validate": {
              "require": "false",
              "minlenght": "undefined",
              "maxlenght": "undefined"
            },
            "columnsize": 12
          },
          {
            "type": "text",
            "label": "Text 2",
            "name": "text_",
            "placeholder": "Enter your text!",
            "validate": {
              "require": "false",
              "minlenght": "undefined",
              "maxlenght": "undefined"
            },
            "columnsize": 12
          },{
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
          }
        
        
        ]
      };
	}
}


export default FormComposerController;
