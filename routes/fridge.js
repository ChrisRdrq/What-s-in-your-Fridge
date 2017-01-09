var express = require('express');
var router = express.Router();

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
// });


module.exports = router;
