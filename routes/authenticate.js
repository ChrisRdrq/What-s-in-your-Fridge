var User = require('../models/user.js');
var Recipe = require('../models/recipe.js');

module.exports = function(app, passport){
	// PROFILE SECTION =========================
	app.get('/fridge', isLoggedIn, function(req, res) {
		var user = req.user;
		res.render('profile', { user: user });
	});

	// CREATE route: adds ingredient to current user ingredients array
	app.post('/ingredients/add', isLoggedIn, function(req, res, next) {
			console.log(req.body.ingredients);
	    req.user.ingredients.push(req.body.ingredients);
	    req.user.save()
	        .then(function() {
	            res.redirect('/fridge');
	        }, function(err) {
	            return next(err);
	        });
	});

    // AUTHENTICATE (FIRST LOGIN) ==================================================
	// locally --------------------------------
		// LOGIN ===============================
		// show the login form
		app.get('/login', function(req, res) {
			res.render('login.ejs', { message: req.flash('loginMessage') });
		});

		// process the login form
		app.post('/login', passport.authenticate('local-login', {
			successRedirect : '/fridge', // redirect to the secure profile section
			failureRedirect : '/login', // redirect back to the signup page if there is an error
			failureFlash : true // allow flash messages
		}));

		// SIGNUP =================================
		// show the signup form
		app.get('/signup', function(req, res) {
			res.render('signup.ejs', { message: req.flash('loginMessage') });
		});

		// process the signup form
		app.post('/signup', function(req, res, next) {
			console.log('about to signup:', req.body);
			let signupStrategy = passport.authenticate('local-signup', {
				successRedirect : '/fridge', // redirect to the secure profile section
				failureRedirect : '/signup', // redirect back to the signup page if there is an error
				failureFlash : true // allow flash messages
			});
			return signupStrategy(req, res, next);
		});
};

// route middleware to ensure user is logged in
function isLoggedIn(req, res, next) {
	if (req.isAuthenticated())
		return next();

	res.redirect('/');
};
