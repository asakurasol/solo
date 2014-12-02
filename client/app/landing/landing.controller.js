angular.module('201410SoloApp')
  .controller('LandingCtrl', function ($scope, $http) {
    $scope.messages = [];

    $scope.signup = function() {  
      console.log($scope.user);
      $http.post('/api/users/signup', $scope.user).success(function(user) {
          console.log('created user ', user);
      });
      $scope.user = {};
    };

    $scope.login = function() {  
      console.log($scope.user);
      $http.post('/api/users/login', $scope.user).success(function(user) {
          console.log('created user ', user);
      });
      $scope.user = {};
    };

  });