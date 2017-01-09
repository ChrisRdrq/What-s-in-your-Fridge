var express = require('express');
var router = express.Router();

// error handler
function makeError(res, message, status) {
  res.statusCode = status;
  var error = new Error(message);
  error.status = status;
  return error;
}


/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('../views/index.ejs');
});

module.exports = router;
