'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var MessageSchema = new Schema({
  user: String,
  content: String,
  active: Boolean
});

module.exports = mongoose.model('Message', MessageSchema);