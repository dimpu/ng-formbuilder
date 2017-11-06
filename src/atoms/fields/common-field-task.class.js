class CommonFieldTask {
    constructor() {
        
    }
    
    setRandomFieldName() {
        this.field.name = this.field.name || (new Date()).getTime();
    }

    setDefaultValue() {
        this.field = this.field || {};
        if (!!this.field.default) {
            this.formData = this.formData || {};
            this.formData[this.field.name] = this.field.default || '';
        }
    }
  
    $onChanges() {
        this.setDefaultValue();
        this.setRandomFieldName();
        
    }
  
  }
  
  export default CommonFieldTask;