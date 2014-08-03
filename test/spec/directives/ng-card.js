'use strict';

describe('Directive: ngCard', function () {

  // load the directive's module
  beforeEach(module('angularPolymerApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<ng-card></ng-card>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the ngCard directive');
  }));
});
