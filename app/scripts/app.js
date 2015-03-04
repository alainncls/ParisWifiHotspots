'use strict';

angular
  .module('projetAngularJsApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'uiGmapgoogle-maps'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'MainCtrl'
      })
      .when('/cgu', {
        templateUrl: 'views/cgu.html',
        controller: 'MainCtrl'
      })
      .when('/hotel/:id', {
        templateUrl: 'views/hotel.html',
        controller: 'HotelCtrl'
      })
      .when('/findHotel', {
        templateUrl: 'views/findHotel.html',
        controller: 'SearchCtrl'
      })
      .when('/findNear', {
        templateUrl: 'views/findNear.html',
        controller: 'NearCtrl'
      })
      .otherwise({
        templateUrl: 'views/404.html',
        controller: 'MainCtrl'
      });
  });
