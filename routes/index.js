var express = require('express');
var router = express.Router();

// connection to user model
var User = require('../models/user.js');

// error handler

function makeError(res, message, status) {
  res.statusCode = status;
  var error = new Error(message);
  error.status = status;
  return error;
}

// test route to make sure everything is working
router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });
});


/* GET home page. */
// router.get('/', function(req, res, next) {
//     res.render('index', { title: 'Express' });
// });

module.exports = router;
