// Have to import angular first before angular-mocks
// https://github.com/Workiva/karma-jspm/issues/23
import angular from 'angular';
import 'angular-mocks';
import NewFormModule from './new-form';
import NewFormController from './new-form.controller';
import NewFormComponent from './new-form.component';
import NewFormTemplate from './new-form.html';

describe('NewForm', ()=>{
	let $rootScope,
	makeController;

	beforeEach(angular.mock.module(NewFormModule.name));
	beforeEach(angular.mock.inject((_$rootScope_)=>{
		$rootScope = _$rootScope_;
		makeController = ()=>{
			return new NewFormController();
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
			expect(NewFormTemplate).to.match(/{{\s?vm\.name\s?}}/g);
		});
	});


	describe('Component', ()=>{
			// test the component/directive itself
			let component = NewFormComponent();

			it('should use the right template',()=>{
				expect(component.template).to.equal(NewFormTemplate);
			});

			it('should use controllerAs', ()=>{
				expect(component).to.have.property('controllerAs');
			});

			it('should use the right controller', ()=>{
				expect(component.controller).to.equal(NewFormController);
			});
	});
});
