var express = require('express');
var router = express.Router();

// CREATE route: adds ingredient to current user ingredients array
router.post('/ingredients/add', function(req, res, next) {
    req.user.ingredients.addToSet(req.params.body);
    req.user.save()
        .then(function() {
            res.redirect('/fridge');
        }, function(err) {
            return next(err);
        });
});


module.exports = router;
