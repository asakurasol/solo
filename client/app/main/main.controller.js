'use strict';

angular.module('201410SoloApp')
  .controller('MainCtrl', function ($scope, $http, Username) {
    angular.extend($scope, Username);
    $scope.message = 'I love that you ';
    $scope.messages = [];
    console.log('angular usename is',$scope.username);

    $scope.fetchMessage = function() {  
      $http.get('/api/messages/'+Username.username)
        .success(function(data) {
        $scope.messages = data.content;
      });
    };

    $scope.addMessage = function() {
      if($scope.message === 'I love that you ') {
        return;
      }
      $http.post('/api/messages', { user: Username.username, content: [$scope.message] })
      .success(function() {
        $scope.message = 'I love that you ';
        $scope.fetchMessage();
      });
    };

    $scope.deleteMessage = function(message) {
      $http.delete('/api/messages/' + Username.username);
      $scope.fetchMessage();
    };

    $scope.fetchMessage();
  });
