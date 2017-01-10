var express = require('express');
var router = express.Router();
var Recipe = require('../models/recipe.js');

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

// GET all recipes
router.get('/api/recipes', function(req, res, next) {
  Recipe.find({})
        .then(function(recipes) {
              res.json(recipes);
        })
});

// GET a specific recipe
router.get('/api/recipes/:id', function(req, res, next) {
  Recipe.findById(req.params.id)
        .then(function(recipe) {
            if (!recipe) return next(makeError(res, 'Document not found', 404));
            res.json(recipe);
        })
        .catch(function(err) {
            return next(err);
        });
});

module.exports = router;
