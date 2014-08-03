'use strict';

/**
 * @ngdoc overview
 * @name angularPolymerApp
 * @description
 * # angularPolymerApp
 *
 * Main module of the application.
 */
angular
  .module('angularPolymerApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      }) 
      .when('/2', {
        templateUrl: 'views/dos.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
