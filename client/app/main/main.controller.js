'use strict';

angular.module('201410SoloApp')
  .controller('MainCtrl', function ($scope, $http, Username) {
    angular.extend($scope, Username);
    $scope.messages = [];

    $scope.fetchMessage = function() {  
      $http.get('/api/messages').success(function(messages) {
        $scope.messages = messages;
        console.log(messages);
      });
    };

    $scope.addMessage = function() {
      if($scope.message === '') {
        return;
      }
      console.log($scope.message);
      $http.post('/api/messages', { content: $scope.message });
      $scope.message = '';
      $scope.fetchMessage();
    };

    $scope.deleteMessage = function(message) {
      $http.delete('/api/messages/' + message._id);
      $scope.fetchMessage();
    };

    $scope.fetchMessage();
  })
  .factory('Username', function() {
    var username = '';

    var updateUserName = function(name) {
      username = name;
    };

    var clearUserName = function() {
      username = 'test';
    };

    return {
      username : username,
      updateUserName : updateUserName,
      clearUserName : clearUserName
    }
  })
