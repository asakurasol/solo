'use strict';

angular.module('201410SoloApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('main', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      })
      .state('landing', {
        url: '/home',
        templateUrl: 'app/landing/landing.html',
        controller: 'LandingCtrl'
      });
  });