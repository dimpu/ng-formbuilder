// Have to import angular first before angular-mocks
// https://github.com/Workiva/karma-jspm/issues/23

import 'angular-mocks';
import AppFileFieldModule from './app-file-field';
import AppFileFieldController from './app-file-field.controller';
import AppFileFieldComponent from './app-file-field.component';
import AppFileFieldTemplate from './app-file-field.html';

describe('AppFileField', ()=>{
	let $rootScope,
	makeController;

	beforeEach(angular.mock.module(AppFileFieldModule.name));
	beforeEach(angular.mock.inject((_$rootScope_)=>{
		$rootScope = _$rootScope_;
		makeController = ()=>{
			return new AppFileFieldController();
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
			expect(AppFileFieldTemplate).to.match(/{{\s?vm\.name\s?}}/g);
		});
	});


	describe('Component', ()=>{
			// test the component/directive itself
			let component = AppFileFieldComponent();

			it('should use the right template',()=>{
				expect(component.template).to.equal(AppFileFieldTemplate);
			});

			it('should use controllerAs', ()=>{
				expect(component).to.have.property('controllerAs');
			});

			it('should use the right controller', ()=>{
				expect(component.controller).to.equal(AppFileFieldController);
			});
	});
});
