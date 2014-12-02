'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var MessageSchema = new Schema({
  user: String,
  content: [Content],
  active: Boolean
});

var Content = new Schema({
  message: String
});

module.exports.message = mongoose.model('Message', MessageSchema);
module.exports.Content = mongoose.model('Content', Content);