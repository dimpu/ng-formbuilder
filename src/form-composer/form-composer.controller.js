class FormComposerController {
	constructor(){
    this.name = 'form-composer';
    this.formData = {};
        this.formJson = {
        "form_name":"Form Builder",
        "fields":[
          {
            "type": "time",
            "label":"Time",
            "name": "time_",
            "default": "",
            "columnsize": 12
          },
          {
            "type": "textarea",
            "label": "Textarea",
            "name": "textarea_",
            "placeholder": "Enter your details",
            "validate": {
              "require": "false",
              "minlenght": "undefined",
              "maxlenght": "undefined"
            },
            "columnsize": 12
          },

          {
            "type": "select",
            "name": "select_",
            "label":"Select",
            "placeholder": "--Select--",
            "columnsize": 12,
            "items": [{
              "label": "Option 1",
              "value": "option_1"
            }]
          },

          {
            "type": "checkbox",
            "label": "Checkbox",
            "name": "chackbox_",
            "columnsize": 12,
            "items": [{
              "label": "Checkbox",
              "value": "checkbox"
            }]
          },
          {
            "type": "radio",
            "label": "Radio",
            "name": "radio_",
            "default": "",
            "inline": "true",
            "columnsize": 12,
            "items": [{
              "label": "Radio",
              "value": "radio"
            },{
              "label": "Radio 2",
              "value": "radio2"
            }]
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
