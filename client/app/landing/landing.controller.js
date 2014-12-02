angular.module('201410SoloApp')
  .controller('LandingCtrl', function ($scope, $http,$state, Username) {
    $scope.messages = [];
    angular.extend($scope, Username);
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
          $scope.username = user;
          $state.go('main');
          console.log(user);
      });
      $scope.user = {};
    };

  });