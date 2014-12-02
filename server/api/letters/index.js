'use strict';

var express = require('express');
var controller = require('../messages/message.controller');

var router = express.Router();

router.get('/:id', controller.show);

module.exports = router;