angular formbuilder
===================

A simple form builder engine using angular.js and twitter bootstrap.

How does it work
----------------

It works based on json.

Install
-------

Using bower

```bash
  bower install ng-formbuilder
```

don't forget to link it to your html page.

```javascript
angular.module('App',['ngFormBuilder'])
.controller('AppCtrl',function($scope){
  $scope.formJson = {
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
});

```

In your html

```html
<form-builder form-json="formJson"></form-builder>

```

Supported json formats
----------------------

```json
{
  "text": {
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
  },
  "email": {
    "type": "email",
    "label": "Email",
    "name": "email_",
    "placeholder": "Enter your email",
    "validate": {
      "require": "false",
      "minlenght": "undefined",
      "maxlenght": "undefined"
    },
    "columnsize": 12
  },
  "tel": {
    "type": "tel",
    "label": "Phone",
    "name": "phone_",
    "placeholder": "Enter your phone number!",
    "validate": {
      "require": "false",
      "minlenght": "undefined",
      "maxlenght": "undefined"
    },
    "columnsize": 12
  },
  "textarea": {
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
  "radio": {
    "type": "radio",
    "label": "Radio",
    "name": "radio_",
    "default": "",
    "inline": "false",
    "columnsize": 12,
    "items": [{
      "label": "Radio",
      "value": "radio"
    }]
  },
  "checkbox": {
    "type": "checkbox",
    "label": "Checkbox",
    "name": "chackbox_",
    "columnsize": 12,
    "items": [{
      "label": "Checkbox",
      "value": "checkbox"
    }]
  },
  "select": {
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
  "date": {
    "type": "date",
    "label":"Date",
    "name": "date_",
    "default": "",
    "columnsize": 12
  },
  "number": {
    "type": "number",
    "label":"Number",
    "name": "number_",
    "columnsize": 12
  },
  "time":{
    "type": "time",
    "label":"Time",
    "name": "time_",
    "default": "",
    "columnsize": 12
  },
  "color":{
    "type": "color",
    "label": "Color",
    "name": "color_",
    "placeholder": "Pick color",
    "validate": {
      "require": "false",
      "minlenght": "undefined",
      "maxlenght": "undefined"
    },
    "columnsize": 12
  },
  "datetime": {
    "type": "datetime",
    "label": "Date Time",
    "name": "dt_",
    "placeholder": "Enter Date time!",
    "validate": {
      "require": "false",
      "minlenght": "undefined",
      "maxlenght": "undefined"
    },
    "columnsize": 12
  },
  "month": {
    "type": "month",
    "label": "Month",
    "name": "month_",
    "placeholder": "Enter Month",
    "validate": {
      "require": "false",
      "minlenght": "undefined",
      "maxlenght": "undefined"
    },
    "columnsize": 12
  },
  "range": {
    "type": "range",
    "label": "Range",
    "name": "range_",
    "placeholder": "Enter Month",
    "validate": {
      "require": "false",
      "minlenght": "undefined",
      "maxlenght": "undefined"
    },
    "columnsize": 12
  },
  "week": {
    "type": "week",
    "label": "Week",
    "name": "week_",
    "placeholder": "Enter Week",
    "validate": {
      "require": "false",
      "minlenght": "undefined",
      "maxlenght": "undefined"
    },
    "columnsize": 12
  },
  "url": {
    "type": "url",
    "label": "url",
    "name": "url_",
    "placeholder": "Enter Url",
    "validate": {
      "require": "false",
      "minlenght": "undefined",
      "maxlenght": "undefined"
    },
    "columnsize": 12
  }
}
```

![ng-formbuilder](http://i.imgur.com/htue1el.png)
