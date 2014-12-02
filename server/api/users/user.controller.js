'use strict';

var _ = require('lodash');
var User = require('./user.model');

exports.createUser = function(req, res) {
	console.log(req.body);
	User.create(req.body, function(err, user) {
		if(err) {
			console.log(err);
			return handleError(res, err);
		}
		return res.json(201, user);
	})
};