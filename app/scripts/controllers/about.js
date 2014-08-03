'use strict';

/**
 * @ngdoc function
 * @name angularPolymerApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularPolymerApp
 */
angular.module('angularPolymerApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
