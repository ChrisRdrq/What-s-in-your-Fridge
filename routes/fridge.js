var express = require('express');
var router = express.Router();

<<<<<<< HEAD
// connection to user model
var User = require('../models/user.js');

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

=======
// CREATE route: adds ingredient to current user ingredients array
// router.post('/ingredients/add', function(req, res, next) {
//     db.collection('users').save(req.body, (err,re))
//     req.user.ingredients.addToSet(req.params.body);
//     req.user.save()
//         .then(function() {
//             console.log(req.user.ingredients);
//             res.redirect('/fridge');
//         }, function(err) {
//             return next(err);
//         });
>>>>>>> 2f11d5d1b34fb568d9b4c0be0bcfefd6a7a57e4a
// });


module.exports = router;
