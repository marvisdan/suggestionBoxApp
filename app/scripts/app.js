'use strict';

/**
 * @ngdoc overview
 * @name suggestionBoxAppApp
 * @description
 * # suggestionBoxAppApp
 *
 * Main module of the application.
 */
var app= angular
  .module('suggestionBoxApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'routeAppControllers',
    'LocalStorageModule'
  ])
  .config(['localStorageServiceProvider', function(localStorageServiceProvider){
  localStorageServiceProvider.setPrefix('ls');
}])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/home', {
        templateUrl: 'views/main.html',
        controller: 'HomeController',
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
      })
      .when('/suggestion', {
        templateUrl: 'views/suggestion.html',
        controller: 'SuggestionController',
      })

      .otherwise({
        redirectTo: '/'
      });
  });
  var routeAppControllers = angular.module('routeAppControllers', [])
