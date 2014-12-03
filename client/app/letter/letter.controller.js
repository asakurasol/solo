'use strict';

angular.module('201410SoloApp')
  .controller('LetterCtrl', function ($scope, $http, $timeout, Username) {
    angular.extend($scope, Username);
    console.log('current username is',Username);
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
          }, idx * 350)
        });


      });
    };

    $timeout(function() {
      $scope.fetchMessage();
    },100);
    
  });
