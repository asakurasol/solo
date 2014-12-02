'use strict';

angular.module('201410SoloApp')
  .config(function ($stateProvider,$urlRouterProvider) {


    $stateProvider
      .state('main', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'/*,
        resolve : {
          auth: function($scope, $state, $q, $timeout) {
            console.log('rootscope',$scope.username);
            console.log('this ran???');
            var deferred = $q.defer();

            if(!$scope.username){
              $state.go('landing');
              return '';
            } else {
              $timeout(deferred.resolve, 0);
              return deferred.promise;
            }
          }
        }*/
      })
      .state('landing', {
        url: '/home',
        templateUrl: 'app/landing/landing.html',
        controller: 'LandingCtrl'
      });
  });