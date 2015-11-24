import CommonTask from '../common-task.class';

class AppSignatureFieldController extends CommonTask{
	constructor(){
		super();
		this.signature = {};
		// this.setDefaultNameLabel();
	}

	setDefaultNameLabel(){
		if(!this.field.name_labels.length){
			this.field.name_labels.push('value_0');
		}
	}

	save(){
		this.formData[this.field.name] = this.formData[this.field.name] || {};
		this.formData[this.field.name][this.field.name_labels[0]]=this.signature.toDataURL();

	}
	clear(){
		if(this.formData[this.field.name][this.field.name_labels[0]])
			this.formData[this.field.name][this.field.name_labels[0]]='';
		this.signature.clear();
	}
}


export default AppSignatureFieldController;
