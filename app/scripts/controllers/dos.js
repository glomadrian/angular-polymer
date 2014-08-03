'use strict';

/**
 * @ngdoc function
 * @name angularPolymerApp.controller:DosCtrl
 * @description
 * # DosCtrl
 * Controller of the angularPolymerApp
 */
angular.module('angularPolymerApp')
  .controller('DosCtrl', function ($scope) {
    $scope.numbers = [
      'Uno',
      'Dos',
      'Tres'
    ];
  });
