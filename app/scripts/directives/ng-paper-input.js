'use strict';

/**
 * @ngdoc directive
 * @name angularPolymerApp.directive:ngPaperInput
 * @description
 * # ngPaperInput
 */
angular.module('angularPolymerApp')
  .directive('ngPaperInput', function () {
    return {
      templateUrl: '../templates/heroSearchInput.html',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
      		
      		var heroInput = document.querySelector('#heroSearchInput');
  	   	scope.$watch(function() {return element.attr('class'); }, function(newValue){});
  			heroInput.addEventListener('change',function(s){
  				var value = heroInput.value;
  				console.log(value);
  				scope.$emit("heroValueChange",value);
  			});
      }
    };
  });
