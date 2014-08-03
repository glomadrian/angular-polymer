'use strict';

describe('Directive: ngPaperInput', function () {

  // load the directive's module
  beforeEach(module('angularPolymerApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<ng-paper-input></ng-paper-input>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the ngPaperInput directive');
  }));
});
