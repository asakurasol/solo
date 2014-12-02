'use strict';

angular.module('201410SoloApp')
  .controller('LetterCtrl', function ($scope, $http, Username) {
    angular.extend($scope, Username);
    console.log('current username is',Username);
    $scope.messages = [];
    console.log('angular usename is',$scope.username);

    $scope.fetchMessage = function() {  
      $http.get('/api/messages/'+Username.username)
        .success(function(data) {
        console.log('data is', data);
        $scope.messages = data.content;
      });
    };

    $scope.fetchMessage();
  });
