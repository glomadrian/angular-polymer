'use strict';

describe('Directive: ngGoogleMapMarker', function () {

  // load the directive's module
  beforeEach(module('angularPolymerApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<ng-google-map-marker></ng-google-map-marker>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the ngGoogleMapMarker directive');
  }));
});
