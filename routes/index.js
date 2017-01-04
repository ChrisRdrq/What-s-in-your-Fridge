var express = require('express');
var router = express.Router();

// connection to user model

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });
});

// var User = require('../models/user.js');

// error handler

// function makeError(res, message, status) {
//   res.statusCode = status;
//   var error = new Error(message);
//   error.status = status;
//   return error;
// }

// INDEX
// get all the movies and return as JSON data
// router.get('/', function(req, res, next) {
//   User.find({})
//   .then(function(ingredients) {
//     res.json({ ingredients: ingredients });
//   })
//   .catch(function(err) {
//     return next(err);
//   });
// });


/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

module.exports = router;
