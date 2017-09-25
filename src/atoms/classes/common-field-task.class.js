class CommonFieldTask {
  constructor() {
      this.setDefaultValue();
  }
  setDefaultValue() {
      // if (!!this.field.default) {
      //     this.formData = this.formData || {};
      //     this.formData[this.field.name] = this.field.default;
      // }
  }

  $onChanges() {
      console.log(this);
  }

}

export default CommonFieldTask;