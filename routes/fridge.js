var express = require('express');
var router = express.Router();

// connection to user model
var User = require('../models/user.js');


function isLoggedIn(req, res, next) {
	if (req.isAuthenticated())
  console.log('user logged in')
		return next();

	res.redirect('/');
};

// Index- show users fridge
router.get('/fridge', isLoggedIn, function(req, res, next) {
  // get all the todos and render the index view
  res.json({})
});
// GET ingredients
// router.get('/:id/ingredients', function(req, res) {
//     res.json( {message: 'ingredients list'} );
//     console.log('Fridge Index Page Rendered')
// });

// SHOW
// router.get('/', function(req, res, next) {
//     if (req.user) {
//         var userId = req.user._id;
//         User.findById(userId).exec(function(err, user) {
//             if (err) {
//                 return next(err);
//             } else {
//                 console.log(user);
//                 res.json( {message: 'hello'});
//             }
//         });

    // } else {
    //     return res.redirect('/');
    // }

// });


module.exports = router;
