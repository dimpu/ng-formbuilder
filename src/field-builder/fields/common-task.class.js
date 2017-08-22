class CommonTask {
    constructor() {
        this.setDefaultValue();
    }
    setDefaultValue() {
        if (!!this.field.default) {
            this.formData = this.formData || {};
            this.formData[this.field.name] = this.field.default;
        }
    }
}

export default CommonTask;
