'use strict';

describe('Filter: heroFilter', function () {

  // load the filter's module
  beforeEach(module('angularPolymerApp'));

  // initialize a new instance of the filter before each test
  var heroFilter;
  beforeEach(inject(function ($filter) {
    heroFilter = $filter('heroFilter');
  }));

  it('should return the input prefixed with "heroFilter filter:"', function () {
    var text = 'angularjs';
    expect(heroFilter(text)).toBe('heroFilter filter: ' + text);
  });

});
