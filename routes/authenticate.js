module.exports = function(app, passport){
    // AUTHENTICATE (FIRST LOGIN) ==================================================
	// locally --------------------------------
		// LOGIN ===============================
		// show the login form
		app.get('/login', function(req, res) {
			res.render('login.ejs', { message: req.flash('loginMessage') });
		});

		// process the login form
		app.post('/login', passport.authenticate('local-login', {
			successRedirect : '/profile', // redirect to the secure profile section
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
				successRedirect : '/profile', // redirect to the secure profile section
				failureRedirect : '/signup', // redirect back to the signup page if there is an error
				failureFlash : true // allow flash messages
			});
			return signupStrategy(req, res, next);
		});
};
