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
  router.post('/login', passport.authenticate('login', {
    successRedirect: '/',
    failureRedirect: '/',
    failureFlash : true 
  }));
 
  // /* GET Registration Page */
  // router.get('/signup', function(req, res){
  //   res.render('register',{message: req.flash('message')});
  // });
 
  /* Handle Registration POST */
  router.post('/signup', passport.authenticate('signup', {
    successRedirect: '/',
    failureRedirect: '/',
    failureFlash : true 
  }));
 
  return router;
}