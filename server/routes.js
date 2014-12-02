/**
 * Main application routes
 */

'use strict';

var errors = require('./components/errors');

module.exports = function(app,passport) {

  // Insert routes below
  app.use('/api/messages', require('./api/messages'));

  app.use('/api/users', require('./api/users')(passport));

  app.route('/api/users/loggedin')
    .get(function(req, res) {
      res.sendfile(app.get('appPath') + '/index.html');
    });
  
  // All undefined asset or api routes should return a 404
  app.route('/:url(api|auth|components|app|bower_components|assets)/*')
   .get(errors[404]);

  // All other routes should redirect to the index.html
  app.route('/*')
    .get(function(req, res) {
      res.sendfile(app.get('appPath') + '/index.html');
    });
};
