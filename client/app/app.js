'use strict';

angular.module('201410SoloApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router',
  'services'
])
  .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/home');

    $locationProvider.html5Mode(true);
  });