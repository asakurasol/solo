angular.module('services', [])
	.factory('Username', function() {
	  var username = '';

	  var updateUserName = function(name) {
	    this.username = name;
	  };

	  var clearUserName = function() {
	    this.username = '';
	  };

	  return {
	    username : username,
	    updateUserName : updateUserName,
	    clearUserName : clearUserName
	  }
	});  