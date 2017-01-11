var express = require('express');
var router = express.Router();
var passport = require('passport');
var Recipe = require('../models/recipe.js');
var User = require('../models/user.js');

// passport authentication

function authenticate (req, res, next) {
	if(!req.isAuthenticated()) {
		req.flash('error', 'Oops! You are not logged in. Please sign up or login to continue.');
    console.log('authenticated failed!');
		res.redirect('/');
	}
	else {
		next();
	}
}

// error handler
function makeError(res, message, status) {
  res.statusCode = status;
  var error = new Error(message);
  error.status = status;
  return error;
}


<<<<<<< HEAD



/* GET home page. */
=======
// GET landing page
>>>>>>> f857c70032afe3189ea2206c19970adc2694a439
router.get('/', function(req, res, next) {
    res.render('../views/index.ejs');
});

// GET profile page
router.get('/profile', function(req, res, next) {
    res.render('../views/profile.ejs');
})

// GET signup page
router.get('/signup', function(req, res, next) {
  res.render('signup');
});

// GET login page
router.get('/login', function(req, res, next) {
  res.render('login');
});

//GET logged in user and send to angular
router.get('/user', authenticate, function(req, res,next) {
  // User.findById(req.params.id)
  var data = {
    firstName: req.user.firstName,
    lastName: req.user.lastName,
    id: req.user._id,
    ingredients: req.user.ingredients,
    favoriteRecipes: req.user.favorites
  };
  res.send(data);
});

//LOGOUT
router.get('/logout', function(req,res){
  req.logout();
  console.log('successfully logged out!');
  res.redirect('/');
})


// POST sign up
router.post('/signup', function(req, res, next) {
  console.log('posting signup user:');
  console.log(req.body);
  var signUpStrategy = passport.authenticate('local-signup', {
    successRedirect: '/profile',
    failureRedirect: '/',
    successFlash: true,
    failureFlash: true
  });
  return signUpStrategy(req, res, next);
});

//POST login -> check passport
router.post('/login',
  passport.authenticate('local-login', {
    session: true,
    successRedirect: '/profile',
    failureRedirect: '/login',
  })
  // function(req, res, next){
  //   // var config = {userId: 'id', pa}
  //   console.log('req  is ', req.body);
  //   console.log('req.user  is ', req.user);

    // res.render('index', {currentUserid:currentUser.id});
    // req.session.user = user;
    // console.log('global user is '+ currentUser);
    // res.redirect('/users/' + req.user.id);
    // res.redirect('/')
    // console.log('attempting to login');
    // console.log(req.body);
    // var loginStrat = passport.authenticate('local-login', {
    //     successRedirect: '/',
    //     failureRedirect: '/login',
    //     failureFlash: true
    // });
    // res.redirect('/users' + req.user.id);
    // loginStrat(req, res, next)
    // .then(function(success){
    //   console.log(success);
    // })
    // .catch(function(err){
    //   console.log(err);
    // })
// }
);


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
