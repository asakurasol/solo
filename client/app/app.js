'use strict';

angular.module('201410SoloApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router',
  'services',
  'ngFx'
])
  .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/home');

    $locationProvider.html5Mode(true);
  });