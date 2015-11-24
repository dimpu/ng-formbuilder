import CommonTask from '../common-task.class';
class AppSelectFieldController extends CommonTask{
	constructor(){
		super();
		this.options = this.field.items;
	}


}


export default AppSelectFieldController;
