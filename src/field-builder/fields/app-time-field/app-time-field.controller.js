import CommonTask from '../common-task.class';

class AppTimeFieldController extends CommonTask{
	constructor(){
		super();
		// this.setDefaultNameLabel();
	}

	setDefaultNameLabel(){
		if(!this.field.name_labels.length){
			this.field.name_labels.push('value_0');
		}
	}

}


export default AppTimeFieldController;
