// Have to import angular first before angular-mocks
// https://github.com/Workiva/karma-jspm/issues/23
import angular from 'angular';
import 'angular-mocks';
import FieldsWidgetModule from './fields-widget';
import FieldsWidgetController from './fields-widget.controller';
import FieldsWidgetComponent from './fields-widget.component';
import FieldsWidgetTemplate from './fields-widget.html';

describe('FieldsWidget', ()=>{
	let $rootScope,
	makeController;

	beforeEach(angular.mock.module(FieldsWidgetModule.name));
	beforeEach(angular.mock.inject((_$rootScope_)=>{
		$rootScope = _$rootScope_;
		makeController = ()=>{
			return new FieldsWidgetController();
		};
	}));

	describe('Module', ()=>{
		// test things about the component module
		// checking to see if it registers certain things and what not
		// test for best practices with naming too
		// test for routing
	});

	describe('Controller', ()=>{
		// test your controller here

		it('should have a name property [REMOVE]', ()=>{ // erase me if you remove this.name from the controller
			let controller = makeController();

			expect(controller).to.have.property('name');
		});
	});

	describe('Template', ()=>{
		// test the template
		// use Regexes to test that you are using the right bindings {{  }}

		it('should have name in template [REMOVE]', ()=>{
			expect(FieldsWidgetTemplate).to.match(/{{\s?vm\.name\s?}}/g);
		});
	});


	describe('Component', ()=>{
			// test the component/directive itself
			let component = FieldsWidgetComponent();

			it('should use the right template',()=>{
				expect(component.template).to.equal(FieldsWidgetTemplate);
			});

			it('should use controllerAs', ()=>{
				expect(component).to.have.property('controllerAs');
			});

			it('should use the right controller', ()=>{
				expect(component.controller).to.equal(FieldsWidgetController);
			});
	});
});
