'use strict';

angular.module('201410SoloApp')
  .controller('MainCtrl', function ($scope, $http, $timeout, Username) {
    angular.extend($scope, Username);
    $scope.message = 'I love that you ';
    $scope.messages = [];
    console.log('angular usename is',$scope.username);

    $scope.fetchMessage = function() {  

      $http.get('/api/messages/'+Username.username)
        .success(function(data) {
        $scope.messages=[];
        console.log('data is', data);
        //$scope.messages = data.content;

        data.content.forEach(function(msg, idx) {

          console.log(msg)

          $timeout(function() {
            $scope.messages.push(msg);
          }, idx * 250)
        });
      });
    };

    $scope.addMessage = function() {
      if($scope.message === 'I love that you ') {
        return;
      }
      $http.post('/api/messages', { user: Username.username, content: [$scope.message] })
      .success(function() {
        $scope.messages.unshift({content: $scope.message});
        $scope.message = 'I love that you ';
      });
    };

    $scope.deleteMessage = function(message) {
      $http.delete('/api/messages/' + Username.username);
      //$scope.fetchMessage();
      $scope.messages.pop();
    };

    $scope.setTemplate = function(template) {
      $scope.message = template;  
    };

    $scope.fetchMessage();
  });
