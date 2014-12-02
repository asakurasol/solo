/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /Messages              ->  index
 * POST    /messages              ->  create
 * GET     /messages/:id          ->  show
 * PUT     /messages/:id          ->  update
 * DELETE  /messages/:id          ->  destroy
 */

'use strict';

var _ = require('lodash');
var Message = require('./message.model').message;
var Content = require('./message.model').content;

// Get list of messages
exports.index = function(req, res) {
  Message.find(function (err, messages) {
    if(err) { return handleError(res, err); }
    return res.json(200, messages);
  });
};

// Get a single message
exports.show = function(req, res) {
  Message.findById(req.params.id, function (err, message) {
    if(err) { return handleError(res, err); }
    if(!message) { return res.send(404); }
    return res.json(Message);
  });
};

// Creates a new message in the DB.
exports.create = function(req, res) {
  // Message.create(req.body, function(err, message) {
  //   if(err) { return handleError(res, err); }
  //   return res.json(201, message);
  // });

  Message.findOne(function (err, message) {
    if(err) { return handleError(res, err); }
    console.log(message);
    if(!message) {
      Message.create({user: req.body.user}, function(err, message) {
        Content.create({content:req.body.content[0]}, function(err, content) {
          console.log(req.body);
          console.log(message);
          console.log(content);

          message.content.push(content);
          message.save(function(err) {
            if (err) { return handleError(res, err); }
              return res.json(200, message);
          });
        })
      })
    } else {
      Content.create({content:req.body.content[0]}, function(err, content) {
        console.log(req.body);
        console.log(message);
        console.log(content);

        message.content.push(content);
        message.save(function(err) {
          if (err) { return handleError(res, err); }
            return res.json(200, message);
        });
      })
    }

    // var updated = _.merge(message, req.body);
    // updated.save(function (err) {
    //   if (err) { return handleError(res, err); }
    //   return res.json(200, message);
    // });

    // return res.json(200, messages);
  });

};

// Updates an existing message in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Message.findById(req.params.id, function (err, message) {
    if (err) { return handleError(res, err); }
    if(!message) { return res.send(404); }
    var updated = _.merge(message, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, message);
    });
  });
};

// Deletes a message from the DB.
exports.destroy = function(req, res) {
  Message.findById(req.params.id, function (err, message) {
    if(err) { return handleError(res, err); }
    if(!message) { return res.send(404); }
    message.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}