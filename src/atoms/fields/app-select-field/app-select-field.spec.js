// Have to import angular first before angular-mocks
// https://github.com/Workiva/karma-jspm/issues/23

import 'angular-mocks';
import AppSelectFieldModule from './app-select-field';
import AppSelectFieldController from './app-select-field.controller';
import AppSelectFieldComponent from './app-select-field.component';
import AppSelectFieldTemplate from './app-select-field.html';

describe('AppSelectField', ()=>{
	let $rootScope,
	makeController;

	beforeEach(angular.mock.module(AppSelectFieldModule.name));
	beforeEach(angular.mock.inject((_$rootScope_)=>{
		$rootScope = _$rootScope_;
		makeController = ()=>{
			return new AppSelectFieldController();
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
			expect(AppSelectFieldTemplate).to.match(/{{\s?vm\.name\s?}}/g);
		});
	});


	describe('Component', ()=>{
			// test the component/directive itself
			let component = AppSelectFieldComponent();

			it('should use the right template',()=>{
				expect(component.template).to.equal(AppSelectFieldTemplate);
			});

			it('should use controllerAs', ()=>{
				expect(component).to.have.property('controllerAs');
			});

			it('should use the right controller', ()=>{
				expect(component.controller).to.equal(AppSelectFieldController);
			});
	});
});
