'use strict';

angular.module('201410SoloApp')
  .controller('MainCtrl', function ($scope, $http, Username) {
    angular.extend($scope, Username);
    console.log(Username);
    $scope.messages = [];
    console.log('angular usename is',$scope.username);
    $scope.fetchMessage = function() {  
      $http.get('/api/messages').success(function(data) {
        console.log(data);
        $scope.messages = data[0].content;
      });
    };

    $scope.addMessage = function() {
      if($scope.message === '') {
        return;
      }
      console.log($scope.message);
      $http.post('/api/messages', { user: Username.username, content: [$scope.message] });
      $scope.message = '';
      $scope.fetchMessage();
    };

    $scope.deleteMessage = function(message) {
      $http.delete('/api/messages/' + message._id);
      $scope.fetchMessage();
    };

    $scope.fetchMessage();
  });
