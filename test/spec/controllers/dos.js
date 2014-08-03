'use strict';

describe('Controller: DosCtrl', function () {

  // load the controller's module
  beforeEach(module('angularPolymerApp'));

  var DosCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DosCtrl = $controller('DosCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
