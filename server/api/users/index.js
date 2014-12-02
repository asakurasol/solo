'use strict';

var express = require('express');
var controller = require('./user.controller');

var router = express.Router();

module.exports = function(passport){
 
  // /* GET login page. */
  // router.get('/', function(req, res) {
  //   // Display the Login page with any flash message, if any
  //   res.render('index', { message: req.flash('message') });
  // });
 
  /* Handle Login POST */

  console.log('passport',passport);
  router.post('/login', passport.authenticate('login'),function(req, res) {
    // If this function gets called, authentication was successful.
    // `req.user` contains the authenticated user.
    res.json(req.user.username);
  });
 
  // /* GET Registration Page */
  // router.get('/signup', function(req, res){
  //   res.render('register',{message: req.flash('message')});
  // });
 
  /* Handle Registration POST */
  router.post('/signup', passport.authenticate('signup', {
    successRedirect: '/',
    failureRedirect: '/',
    failureFlash : false
  }));
 
  return router;
}