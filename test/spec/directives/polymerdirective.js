'use strict';

describe('Directive: polymerDirective', function () {

  // load the directive's module
  beforeEach(module('angularPolymerApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<polymer-directive></polymer-directive>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the polymerDirective directive');
  }));
});
