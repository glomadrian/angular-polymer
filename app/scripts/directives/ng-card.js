'use strict';

/**
 * @ngdoc directive
 * @name angularPolymerApp.directive:ngCard
 * @description
 * # ngCard
 */
angular.module('angularPolymerApp')
  .directive('ngCard', function () {
    return {
      templateUrl: '../templates/cardTemplate.html',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
  			var card = document.querySelector('post-card');
  			card.addEventListener('toggle',function(s){
  				console.log("toggle "+s.msg);
  				scope.$emit("toggle");
  			});
      }
    };
  });
