import fields from './fields.json';

class FieldPusherController {
	constructor(){
		this.name = 'field-pusher';
		this.fields = fields;
	}
	addField(type){
		let field = angular.copy(this.fields[type]);
		field.name = field.name + (new Date()).getTime();
		this.formJson.fields.push(field);
	}
}


export default FieldPusherController;
