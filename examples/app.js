angular.module('App',['ngFormBuilder'])
.controller('AppCtrl',function($scope){
  var vm = this;
  this.theme = 'default';
  this.loadCss = function(theme){
    $('#wtheme').attr('href','//bootswatch.com/'+theme+'/bootstrap.min.css');
  };


  this.formJson = {
    "form_name":"Form Builder",
    "dimpu":"dimpu",
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
        "columnsize": 6
      },{
          "type": "email",
          "label": "Email",
          "name": "email_",
          "placeholder": "Enter your Email!",
          "validate": {
            "require": "false",
            "minlenght": "undefined",
            "maxlenght": "undefined"
          },
          "columnsize": 6
        },{
            "type": "phone",
            "label": "Phone",
            "name": "phone_",
            "placeholder": "Enter your phone number!",
            "validate": {
              "require": "false",
              "minlenght": "undefined",
              "maxlenght": "undefined"
            },
            "columnsize": 12
          }]
  };


  $scope.$watch("vm.formJson",function(newVal){
    console.log(newVal);
    vm.jsonModel = JSON.stringify(vm.formJson, null, "    ");
  });




});
