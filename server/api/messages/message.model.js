'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var MessageSchema = new Schema({
  letter: String,
  content: String,
  active: Boolean
});

module.exports = mongoose.model('Message', MessageSchema);